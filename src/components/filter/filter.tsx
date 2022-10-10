import { Checkbox, Stack, Button, Flex, HStack, useDisclosure, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, 
  IconButton
} from "@chakra-ui/react";
import { MdBuild, MdCall, MdFilterList, MdRedo } from "react-icons/md";
import { useEffect, useState } from "react";
import styles from './filter.module.scss';
import classNames from 'classnames';

type Props = {
  categories: string[];
  selectedCats: (s: string[]) => void;
}

const Filter = ({categories, selectedCats}: Props) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [checkedItems, setCheckedItems] = useState([false]);

  useEffect(() => {
    const temp: boolean[]= [];
    temp.length = categories.length 
    temp.fill(true);
    console.log(temp);
    setCheckedItems(temp);
    console.log('run Once');
    
  },[categories])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  const [isInvalid, setIsInvalid] = useState(false);

  const handleAllChecked = (checked: boolean) => {
    if (checked) {
      const temp = [...checkedItems];
      temp.fill(checked);
      setCheckedItems(temp);
    } else {
      console.log('select all');
      
    }
  }

  const handleAllCheckedButton = () => {

      const temp = [...checkedItems];
      temp.fill(true);
      setCheckedItems(temp);

  }
  
  const handleSingleChecked = (checked: boolean, key: number) => {
    console.log(checked);
    console.log(key);
    const temp = [...checkedItems];
    temp.splice(key, 1, checked);
    console.log(temp.length);
    console.log(temp.every((i) => i === false));
    
    if (temp.every((i) => i === false)) {
      console.log('too short');
      setIsInvalid(true);

      setTimeout(() => {
        setIsInvalid(false);
      }, 1000);
      
    } else {
      setCheckedItems(temp);
    }

  }

  useEffect(() => {
    // const categorySelected = []
    const includedCats: string[] = []
    checkedItems.forEach((c, key) => {
      if (c) {
        includedCats.push(categories[key])
      }
    })

    console.log(includedCats);
    
    selectedCats(includedCats);
    // array of included items 

  },[checkedItems])
  
  return (
    <>
      <HStack  m={6} mt={1} spacing={1}>
      <>
      <IconButton
          onClick={onOpen}
          aria-label="Search database"
          icon={<MdFilterList />}
          height="56px"
          width="74px"
        />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose Catogeries</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Stack p={6} spacing={1}>
            <>
              {categories.map((i, key) => {
                return (
                  <Checkbox
                  className={classNames([isInvalid && styles.checkboxInvalid, styles.checkbox])}
                  // isInvalid={isInvalid}
                  isChecked={checkedItems[key]}
                  onChange={(e) => handleSingleChecked(e.target.checked, key)}
                >
                  {i}
                </Checkbox>            
                )
              })}       
            </>
          </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='outline'>Select All and Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
        <Stack p={6} spacing={1}>
          <>
            {categories.map((i, key) => {
              return (
                <Checkbox
                className={classNames([isInvalid && styles.checkboxInvalid, styles.checkbox])}
                // isInvalid={isInvalid}
                isChecked={checkedItems[key]}
                onChange={(e) => handleSingleChecked(e.target.checked, key)}
              >
                {i}
              </Checkbox>            
              )
            })}       
          </>
        </Stack>
        <Button onClick={handleAllCheckedButton}>
          Select All
        </Button>
      </HStack>
    </>
  )
}

export default Filter;