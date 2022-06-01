import { Fragment } from "react";

import { ReactComponent as VaseBase } from "assets/foyer/vase_base.svg";
import { ReactComponent as VaseFlowersLight } from "assets/foyer/vase_flowers_light.svg";
import { ReactComponent as VaseFlowersShadow } from "assets/foyer/vase_flowers_shadow.svg";
import vaseFlowersStems from "assets/foyer/vase_flowers_stems.png";
import vaseDetails from "assets/foyer/vase_details.png";

import styles from "./vase.module.scss";

const Vase = () => {
  return (
    <Fragment>
      <img
        className={`${styles.image} ${styles.vaseFlowersStems}`}
        src={vaseFlowersStems}
        alt="Vase Flowers Stems"
      />
      <VaseFlowersShadow
        className={`${styles.svg} ${styles.vaseFlowersShadow}`}
      />
      <VaseFlowersLight
        className={`${styles.svg} ${styles.vaseFlowersLight}`}
      />
      <VaseBase className={`${styles.svg} ${styles.vaseBase}`} />
      <img
        className={`${styles.image} ${styles.vaseDetails}`}
        src={vaseDetails}
        alt="Vase Details"
      />
    </Fragment>
  );
};

export default Vase;
