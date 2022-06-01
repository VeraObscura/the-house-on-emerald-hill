import { Fragment } from "react";

import { ReactComponent as BanisterBase } from "assets/foyer/banister_base.svg";
import banisterDetails from "assets/foyer/banister_details.png";

import styles from "./banister.module.scss";

const Banister = () => {
  return (
    <Fragment>
      <BanisterBase className={`${styles.svg} ${styles.banisterBase}`} />
      <img
        className={styles.image}
        src={banisterDetails}
        alt="Banister Details"
      />
    </Fragment>
  );
};

export default Banister;
