import Title from "../components/title";
import ColorModeSwitcher from "../components/colorSwitcher";
import styles from "./header.module.scss";

const Footer = () => {
  return (
    <div className={styles.header}>
      <span>Copyright Danppo Github</span>
      <ColorModeSwitcher />
    </div>
  );
};

export default Footer;
