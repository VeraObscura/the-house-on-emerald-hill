import { strings } from "./strings";

import Base from "./components/base";
import Floors from "./components/floors";
import Walls from "./components/walls";
import Ceiling from "./components/ceiling";
import Baseboards from "./components/baseboards";
import Door from "./components/door";
import Chandelier from "./components/chandelier";
import MirrorTable from "./components/mirrorTable";
import Vase from "./components/vase";
import Banister from "./components/banister";

import styles from "./foyer.module.scss";

const Foyer = () => {
  return (
    <div className={styles.foyerContainer}>
      <section className={styles.foyer}>
        <div className={styles.imageContainer}>
          <Base />
          <Floors />
          <Walls />
          <Ceiling />
          <Baseboards />
          <Door />
          <Chandelier />
          <MirrorTable />
          <Vase />
          <Banister />
        </div>

        {/* 
            <p>{strings.DATE}</p>
            <p>{strings.PARA_1}</p>
            <p>{strings.PARA_2}</p>
            <p>{strings.PARA_3}</p>
            <p>{strings.PARA_4}</p>
            <p>{strings.PARA_5}</p>
            <p>{strings.PARA_6}</p>
            <p>{strings.PARA_7}</p> */}
      </section>
    </div>
  );
};

export default Foyer;
