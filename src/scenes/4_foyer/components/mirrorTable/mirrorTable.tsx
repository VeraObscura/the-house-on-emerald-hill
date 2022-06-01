import { Fragment } from "react";

import { ReactComponent as MirrorTableShadow } from "assets/foyer/mirrortable_shadow.svg";
import { ReactComponent as MirrorTableMirror } from "assets/foyer/mirrortable_mirror.svg";
import { ReactComponent as MirrorTableBase } from "assets/foyer/mirrortable_base.svg";
import mirrorTableDetails from "assets/foyer/mirrortable_details.png";
import mirrorTableGhost from "assets/foyer/mirrortable_ghost.png";
import mirrorTableGlare from "assets/foyer/mirrortable_mirrorglare.png";
import mirrortableReflections from "assets/foyer/mirrortable_reflections.png";

import styles from "./mirrorTable.module.scss";

const MirrorTable = () => {
  return (
    <Fragment>
      <MirrorTableShadow
        className={`${styles.svg} ${styles.mirrorTableShadow}`}
      />
      <MirrorTableMirror
        className={`${styles.svg} ${styles.mirrorTableMirror}`}
      />
      <img
        className={`${styles.image} ${styles.mirrorTableGhost}`}
        src={mirrorTableGhost}
        alt="MirrorTable Ghost"
      />
      <img
        className={`${styles.image} ${styles.mirrorTableReflections}`}
        src={mirrortableReflections}
        alt="MirrorTable Reflections"
      />
      <img
        className={`${styles.image} ${styles.mirrorTableGlare}`}
        src={mirrorTableGlare}
        alt="MirrorTable Mirror Glare"
      />
      <MirrorTableBase className={`${styles.svg} ${styles.mirrorTableBase}`} />
      <img
        className={`${styles.image} ${styles.mirrorTableDetails}`}
        src={mirrorTableDetails}
        alt="MirrorTable Details"
      />
    </Fragment>
  );
};

export default MirrorTable;
