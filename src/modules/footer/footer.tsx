import styles from "./footer.module.scss";
import Title from "../../components/title";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Title size="m" value="Copyright Danppo Github" />
    </div>
  );
};

export default Footer;
