import { useState } from "react";
import Title from "../../components/title";
import ColorModeSwitcher from "../../components/colorSwitcher";
import {
  IconButton,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import MultiPerson from "../../components/multiPersonMenu/";

import styles from "./header.module.scss";

type Props = {
  resetQuestions: () => void;
};

const Header = ({ resetQuestions }: Props) => {
  const [multiPersonOpen, setMultiPersonOpen] = useState(false);
  return (
    <Flex className={styles.header} justify="space-between">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<MdMenu />}
          variant="outline"
        />
        <MenuList>
          <MenuItem onClick={resetQuestions}>Reset Questions</MenuItem>
          <MenuItem onClick={() => setMultiPersonOpen(true)}>
            Multi person mode
          </MenuItem>
          <MenuItem>Help</MenuItem>
        </MenuList>
      </Menu>
      <Title size="3xl" bold value={"Answer Me This?"} />
      <ColorModeSwitcher />
      <MultiPerson
        handleOpen={multiPersonOpen}
        handleClose={setMultiPersonOpen}
      />
    </Flex>
  );
};

export default Header;
