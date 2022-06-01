import { Fragment } from "react";

import { ReactComponent as FoyerWalls } from "assets/foyer/walls.svg";
import { ReactComponent as FoyerWallEdge } from "assets/foyer/wall_edge.svg";
import wallsShadow from "assets/foyer/walls_shadow.png";
import peacockWallpaper from "assets/foyer/peacock_wallpaper.png";

import styles from "./walls.module.scss";

const Walls = () => {
  return (
    <Fragment>
      <FoyerWalls className={`${styles.svg} ${styles.walls}`} />
      <FoyerWallEdge className={`${styles.svg} ${styles.wallEdge}`} />
      {/* <img
      className={styles.image}
      src={abstractWallpaper}
      alt="Abstract Wallpaper"
    /> */}
      <img
        className={styles.image}
        src={peacockWallpaper}
        alt="Peacock Wallpaper"
      />
      <img className={styles.image} src={wallsShadow} alt="Walls Shadow" />
    </Fragment>
  );
};

export default Walls;
