import { Fragment } from "react";

import { ReactComponent as DoorBase } from "assets/door_base.svg";
import doorDetails from "assets/door_details.png";

import styles from "./door.module.scss";

const Door = () => {
  return (
    <Fragment>
      <DoorBase className={`${styles.svg} ${styles.doorBase}`} />
      <img
        className={`${styles.image} ${styles.doorDetails}`}
        src={doorDetails}
        alt="Door Details"
      />
    </Fragment>
  );
};

export default Door;
