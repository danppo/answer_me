import Title from "../../components/title";
import ColorModeSwitcher from "../../components/colorSwitcher";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Title size="3xl" bold value={"Answer Me This?"} />
      <ColorModeSwitcher />
    </div>
  );
};

export default Header;
