import { useAppSelector } from "redux/hooks";

import {
  SceneContainer,
  BaseContainer,
  UIContainer,
  TextContainer,
  ImageContainer,
} from "shared/containers";
import Inventory from "shared/inventory";

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

import {
  DATE,
  PARA_1,
  PARA_2,
  PARA_3,
  PARA_4,
  PARA_5,
  PARA_6,
  PARA_7,
} from "./foyerNarrative";

const Foyer = () => {
  const tiles = useAppSelector((state) => state.tiles);
  const baskets = useAppSelector((state) => state.baskets);

  return (
    <SceneContainer>
      <BaseContainer>
        <Base />
      </BaseContainer>
      <UIContainer>
        <TextContainer>
          <DATE />
          <PARA_1 tiles={tiles.foyer.para1} baskets={baskets.foyer.para1} />
          <PARA_2 tiles={tiles.foyer.para2} baskets={baskets.foyer.para2} />
          <PARA_3 tiles={tiles.foyer.para3} baskets={baskets.foyer.para3} />
          <PARA_4 tiles={tiles.foyer.para4} baskets={baskets.foyer.para4} />
          <PARA_5 tiles={tiles.foyer.para5} baskets={baskets.foyer.para5} />
          <PARA_6 tiles={tiles.foyer.para6} baskets={baskets.foyer.para6} />
          <PARA_7 tiles={tiles.foyer.para7} baskets={baskets.foyer.para7} />
        </TextContainer>

        <Inventory />
      </UIContainer>
      <ImageContainer>
        <Floors />
        <Walls />
        <Ceiling />
        <Baseboards />
        <Door />
        <Chandelier />
        <MirrorTable />
        <Vase />
        <Banister />
      </ImageContainer>
    </SceneContainer>
  );
};

export default Foyer;
