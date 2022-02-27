import { Fragment } from "react";

import { ReactComponent as ChandelierBase } from "assets/chandelier_base.svg";
import { ReactComponent as ChandelierLights } from "assets/chandelier_lights.svg";

import chandelierDetails from "assets/chandelier_details.png";

import styles from "./chandelier.module.scss";

const Chandelier = () => {
  return (
    <Fragment>
      <ChandelierLights
        className={`${styles.svg} ${styles.chandelierLights}`}
      />
      <ChandelierBase className={`${styles.svg} ${styles.chandelierBase}`} />
      <img
        className={styles.image}
        src={chandelierDetails}
        alt="Chandelier Details"
      />
    </Fragment>
  );
};

export default Chandelier;
