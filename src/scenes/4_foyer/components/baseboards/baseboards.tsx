import { Fragment } from "react";

import { ReactComponent as BaseboardsBase } from "assets/baseboards_base.svg";
import baseboardsDetails from "assets/baseboards_details.png";

import styles from "./baseboards.module.scss";

const Baseboards = () => {
  return (
    <Fragment>
      <BaseboardsBase className={`${styles.svg} ${styles.baseboardsBase}`} />
      <img
        className={`${styles.image} ${styles.baseboardDetails}`}
        src={baseboardsDetails}
        alt="Baseboards Details"
      />
    </Fragment>
  );
};

export default Baseboards;
