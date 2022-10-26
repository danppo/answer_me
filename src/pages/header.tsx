import Title from "../components/title";
import ColorModeSwitcher from "../components/colorSwitcher";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Title />
      <ColorModeSwitcher />
    </div>
  );
};

export default Header;
