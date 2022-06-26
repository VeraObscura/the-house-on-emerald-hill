import { useDispatch } from "react-redux";
import { useAppSelector } from "redux/hooks";
import { useState } from "react";
import { useDrop } from "react-dnd";

import { RootState } from "redux/store";
import { fillBasket } from "redux/slices/basketSlice";
import { setInventory } from "redux/slices/inventorySlice";

import { BasketType } from "types/basket";
import { WordType } from "types/word";

import styles from "./basket.module.scss";

interface BasketProps extends BasketType {
  location: string;
  paragraph: string;
  index: number;
}

const Basket = ({ allowedWords, location, paragraph, index }: BasketProps) => {
  const dispatch = useDispatch();
  const tiles = useAppSelector((state: RootState) => state.inventory.tiles);

  const [basket, setBasket] = useState<WordType | null>(null);
  const [{ isOver }, dropRef] = useDrop({
    accept: "tile",
    drop: (tile: WordType) => dropTile(tile),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const dropTile = (tile: WordType) => {
    const inventoryTiles = [...tiles];

    if (allowedWords.includes(tile.word)) {
      const wordIndex = inventoryTiles.findIndex((object) => {
        return object.id === tile.id;
      });
      inventoryTiles.splice(wordIndex, 1); // Removes current tile from tiles array

      if (basket) {
        inventoryTiles.push({
          id: basket?.id,
          word: basket.word,
          alignment: basket.alignment,
        }); // Appends current tile to tiles array
      }

      // Sort tiles by id
      inventoryTiles.sort(function (a, b) {
        return a.id - b.id;
      });

      const word = tile.word;
      const alignment = tile.alignment;

      dispatch(setInventory(inventoryTiles));
      dispatch(fillBasket({ index, location, paragraph, word, alignment }));
      setBasket(tile);
    }
  };

  return (
    <span
      className={
        basket ? styles.basket : `${styles.basket} ${styles.basket__empty}`
      }
      ref={dropRef}
    >
      {basket && <div className={styles.text}>{basket.word}</div>}
      {isOver && <div></div>}
    </span>
  );
};

export default Basket;
