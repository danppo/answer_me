import {
  Checkbox,
  Stack,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Text,
} from "@chakra-ui/react";

import { MdFilterList, MdCheckCircle } from "react-icons/md";
import { useEffect, useState } from "react";
import styles from "./filter.module.scss";
import classNames from "classnames";

type Props = {
  categories: string[];
  noQuestionsLeftCats: string[];
  selectedCats: (s: string[]) => void;
  onCloseModal: () => void;
};

const Filter = ({
  categories,
  selectedCats,
  onCloseModal,
  noQuestionsLeftCats,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [checkedItems, setCheckedItems] = useState([false]);

  useEffect(() => {
    const temp: boolean[] = [];
    temp.length = categories.length;
    temp.fill(true);
    setCheckedItems(temp);
  }, [categories]);

  const allChecked = checkedItems.every(Boolean);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSelectAllClose = () => {
    const temp = [...checkedItems];
    temp.fill(true);
    setCheckedItems(temp);
    setTimeout(() => {
      setIsInvalid(false);
      onClose();
    }, 200);
  };

  const handleSingleChecked = (checked: boolean, key: number) => {
    const temp = [...checkedItems];
    temp.splice(key, 1, checked);
    if (temp.every((i) => i === false)) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
    setCheckedItems(temp);
  };

  const handleClose = () => {
    if (!isInvalid) {
      onClose();
      onCloseModal();
    }
  };

  useEffect(() => {
    const includedCats: string[] = [];
    checkedItems.forEach((c, key) => {
      if (c) {
        includedCats.push(categories[key]);
      }
    });
    selectedCats(includedCats);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedItems]);

  const FilterIcon = () => {
    return (
      <>
        <MdFilterList />
        {!allChecked && <MdCheckCircle className={styles.check} />}
      </>
    );
  };

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="Search database"
        icon={<FilterIcon />}
        height="56px"
        width="74px"
      />

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose Catogeries</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack px={6} spacing={1}>
              <>
                {categories.map((i, key) => {
                  return (
                    <Checkbox
                      key={key}
                      colorScheme="teal"
                      disabled={noQuestionsLeftCats.includes(i)}
                      className={classNames([
                        isInvalid && styles.checkboxInvalid,
                        styles.checkbox,
                      ])}
                      // isInvalid={isInvalid}
                      isChecked={
                        !noQuestionsLeftCats.includes(i)
                          ? checkedItems[key]
                          : false
                      }
                      onChange={(e) =>
                        handleSingleChecked(e.target.checked, key)
                      }
                    >
                      {i}
                    </Checkbox>
                  );
                })}
                <Text fontSize="xs" color="red.300" height="18px">
                  {isInvalid && <>One category must be selected</>}
                </Text>
              </>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              onClick={handleSelectAllClose}
              variant="outline"
            >
              Select All and Close
            </Button>
            <Button
              disabled={isInvalid}
              colorScheme="teal"
              onClick={handleClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Filter;
