import { Fragment } from "react";

import { ReactComponent as CeilingBase } from "assets/ceiling_base.svg";
import { ReactComponent as CrownMouldingBase } from "assets/crown_moulding_base.svg";
import ceilingDetails from "assets/ceiling_details.png";
import ceilingShadow from "assets/ceiling_shadow.png";
import crownMouldingShadow from "assets/crown_moulding_shadow.png";

import styles from "./ceiling.module.scss";

const Ceiling = () => {
  return (
    <Fragment>
      <CrownMouldingBase
        className={`${styles.svg} ${styles.crownMouldingBase}`}
      />
      <CeilingBase className={`${styles.svg} ${styles.ceilingBase}`} />
      <img
        className={styles.image}
        src={ceilingDetails}
        alt="Ceiling Details"
      />
      <img
        className={`${styles.image} ${styles.ceilingShadow}`}
        src={ceilingShadow}
        alt="Ceiling Shadow"
      />
      <img
        className={styles.image}
        src={crownMouldingShadow}
        alt="Crown Moulding Shadow"
      />
    </Fragment>
  );
};

export default Ceiling;
