import base from "assets/base.png";

import styles from "./base.module.scss";

const Floors = () => {
  return (
    <img className={`${styles.image} ${styles.base}`} src={base} alt="Base" />
  );
};

export default Floors;
