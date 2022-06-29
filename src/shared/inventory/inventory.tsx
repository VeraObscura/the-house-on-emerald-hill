import { useDispatch } from "react-redux";
import { useAppSelector } from "redux/hooks";
import { useDrop } from "react-dnd";

import { RootState } from "redux/store";
import { addTile } from "redux/slices/inventorySlice";

import Tile from "gameObjects/tile";
import { TileType } from "types/tile";

import styles from "./inventory.module.scss";

const Inventory = () => {
  const dispatch = useDispatch();
  const tiles = useAppSelector((state: RootState) => state.inventory.tiles);

  const [{ isOver }, dropRef] = useDrop({
    accept: "tile",
    drop: (tile: TileType) => dispatch(addTile(tile)),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  console.log(tiles);

  return (
    <div className={styles.inventoryContainer} ref={dropRef}>
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          id={tile.id}
          word={tile.word}
          alignment={tile.alignment}
          customStyle={tile.customStyle}
        />
      ))}
    </div>
  );
};

export default Inventory;
