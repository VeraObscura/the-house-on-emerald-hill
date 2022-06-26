import { useDispatch } from "react-redux";
import { useAppSelector } from "redux/hooks";
import { useDrop } from "react-dnd";

import { RootState } from "redux/store";
import { setInventory } from "redux/slices/inventorySlice";

import Tile from "gameObjects/tile";
import { WordType } from "types/word";

import styles from "./inventory.module.scss";

const Inventory = () => {
  const dispatch = useDispatch();
  const tiles = useAppSelector((state: RootState) => state.inventory.tiles);

  const [{ isOver }, dropRef] = useDrop({
    accept: "tile",
    drop: (tile: WordType) => dropTile(tile),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const dropTile = (tile: WordType) => {
    const inventoryTiles = [...tiles];

    const currentWords = inventoryTiles.map((tile) => {
      return tile.word;
    });

    if (!currentWords.includes(tile.word)) {
      inventoryTiles.push({
        id: tile?.id,
        word: tile.word,
        alignment: tile.alignment,
      }); // Appends current tile to tiles array

      // Sort tiles by id
      inventoryTiles.sort(function (a, b) {
        return a.id - b.id;
      });

      // update inventory
      dispatch(setInventory(inventoryTiles));
    }
  };

  return (
    <div className={styles.inventoryContainer} ref={dropRef}>
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          id={tile.id}
          word={tile.word}
          alignment={tile.alignment}
        />
      ))}
    </div>
  );
};

export default Inventory;
