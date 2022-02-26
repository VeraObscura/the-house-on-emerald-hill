import { strings } from "./strings";

import { ReactComponent as BanisterBase } from "assets/banister_base.svg";
import { ReactComponent as Walls } from "../../assets/walls.svg";
import { ReactComponent as WallEdge } from "../../assets/wall_edge.svg";
import { ReactComponent as DoorBase } from "../../assets/door_base.svg";
import { ReactComponent as BaseboardsBase } from "../../assets/baseboards_base.svg";
import { ReactComponent as MirrorTableShadow } from "../../assets/mirrortable_shadow.svg";
import { ReactComponent as MirrorTableMirror } from "../../assets/mirrortable_mirror.svg";
import { ReactComponent as MirrorTableBase } from "../../assets/mirrortable_base.svg";
import { ReactComponent as CeilingBase } from "../../assets/ceiling_base.svg";
import { ReactComponent as CrownMouldingBase } from "../../assets/crown_moulding_base.svg";
import { ReactComponent as FloorBase } from "../../assets/floor_base.svg";
import { ReactComponent as VaseBase } from "../../assets/vase_base.svg";
import { ReactComponent as ChandelierBase } from "../../assets/chandelier_base.svg";
import { ReactComponent as ChandelierLights } from "../../assets/chandelier_lights.svg";
import base from "../../assets/base.png";
import banisterDetails from "../../assets/banister_details.png";
import wallsShadow from "../../assets/walls_shadow.png";
import peacockWallpaper from "../../assets/peacock_wallpaper.png";
import abstractWallpaper from "../../assets/abstract_wallpaper.png";
import doorDetails from "../../assets/door_details.png";
import baseboardsDetails from "../../assets/baseboards_details.png";
import mirrorTableDetails from "../../assets/mirrortable_details.png";
import ceilingDetails from "../../assets/ceiling_details.png";
import ceilingShadow from "../../assets/ceiling_shadow.png";
import crownMouldingShadow from "../../assets/crown_moulding_shadow.png";
import floorTiles from "../../assets/floor_tiles.png";
import floorShadow from "../../assets/floor_shadow.png";
import mirrortableReflections from "../../assets/mirrortable_reflections.png";
import vaseDetails from "../../assets/vase_details.png";
import chandelierDetails from "../../assets/chandelier_details.png";

import styles from "./foyer.module.scss";

const Foyer = () => {
  return (
    <div className={styles.foyer}>
      <p>{strings.DATE}</p>

      <div className={styles.imageContainer}>
        <img className={styles.image} src={base} alt="Base" />

        <FloorBase className={`${styles.svg} ${styles.floorBase}`} />
        <img className={styles.image} src={floorTiles} alt="Floor Tiles" />
        <img className={styles.image} src={floorShadow} alt="Floor Shadow" />

        <Walls className={`${styles.svg} ${styles.walls}`} />
        <WallEdge className={`${styles.svg} ${styles.wallEdge}`} />
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

        <BaseboardsBase className={`${styles.svg} ${styles.baseboardsBase}`} />
        <img
          className={styles.image}
          src={baseboardsDetails}
          alt="Baseboards Details"
        />

        <DoorBase className={`${styles.svg} ${styles.doorBase}`} />
        <img
          className={`${styles.image} ${styles.doorDetails}`}
          src={doorDetails}
          alt="Door Details"
        />

        <ChandelierLights
          className={`${styles.svg} ${styles.chandelierLights}`}
        />
        <ChandelierBase className={`${styles.svg} ${styles.chandelierBase}`} />
        <img
          className={styles.image}
          src={chandelierDetails}
          alt="Chandelier Details"
        />

        <MirrorTableShadow
          className={`${styles.svg} ${styles.mirrorTableShadow}`}
        />
        <MirrorTableMirror
          className={`${styles.svg} ${styles.mirrorTableMirror}`}
        />
        <img
          className={styles.image}
          src={mirrortableReflections}
          alt="MirrorTable Reflections"
        />
        <MirrorTableBase
          className={`${styles.svg} ${styles.mirrorTableBase}`}
        />
        <img
          className={styles.image}
          src={mirrorTableDetails}
          alt="MirrorTable Details"
        />

        <VaseBase className={`${styles.svg} ${styles.vaseBase}`} />
        <img className={styles.image} src={vaseDetails} alt="Vase Base" />

        <BanisterBase className={`${styles.svg} ${styles.banisterBase}`} />
        <img
          className={styles.image}
          src={banisterDetails}
          alt="Banister Details"
        />
      </div>

      {/* <p>{strings.PARA_1}</p>
            <p>{strings.PARA_2}</p>
            <p>{strings.PARA_3}</p>
            <p>{strings.PARA_4}</p>
            <p>{strings.PARA_5}</p>
            <p>{strings.PARA_6}</p>
            <p>{strings.PARA_7}</p> */}
    </div>
  );
};

export default Foyer;
