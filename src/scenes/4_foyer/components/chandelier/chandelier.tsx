import { Fragment } from "react";

import { ReactComponent as ChandelierBase } from "assets/foyer/chandelier_base.svg";
import { ReactComponent as ChandelierLights } from "assets/foyer/chandelier_lights.svg";

import chandelierDetails from "assets/foyer/chandelier_details.png";

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
