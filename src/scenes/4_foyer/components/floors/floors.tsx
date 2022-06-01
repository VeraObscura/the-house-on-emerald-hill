import { Fragment } from "react";

import { ReactComponent as FloorBase } from "assets/foyer/floor_base.svg";
import floorTiles from "assets/foyer/floor_tiles.png";
import floorShadow from "assets/foyer/floor_shadow.png";

import styles from "./floors.module.scss";

const Floors = () => {
  return (
    <Fragment>
      <FloorBase className={`${styles.svg} ${styles.floorBase}`} />
      <img
        className={`${styles.image} ${styles.floorTiles}`}
        src={floorTiles}
        alt="Floor Tiles"
      />
      <img
        className={`${styles.image} ${styles.floorShadow}`}
        src={floorShadow}
        alt="Floor Shadow"
      />
    </Fragment>
  );
};

export default Floors;
