import { useDispatch } from "react-redux";
import { useAppSelector } from "redux/hooks";
import { useState } from "react";
import { useDrop } from "react-dnd";

import { RootState } from "redux/store";
import { fillBasket } from "redux/slices/basketSlice";
import { setInventory } from "redux/slices/inventorySlice";

import { BasketType } from "types/basket";
import { TileType } from "types/tile";

import styles from "./basket.module.scss";

interface BasketProps extends BasketType {
  location: string;
  paragraph: string;
  index: number;
}

const Basket = ({ allowedWords, location, paragraph, index }: BasketProps) => {
  const dispatch = useDispatch();
  const tiles = useAppSelector((state: RootState) => state.inventory.tiles);

  const [basket, setBasket] = useState<TileType | null>(null);
  const [{ isOverCurrent }, dropRef] = useDrop({
    accept: "tile",
    drop: (tile: TileType) => dropTile(tile),
    collect: (monitor) => ({
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  });

  const dropTile = (tile: TileType) => {
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

  const isEmpty = !basket ? styles.basket__empty : "";
  const isHovering = isOverCurrent ? styles.basket__hovering : "";

  return (
    <span
      className={`${styles.basket} ${isEmpty} ${isHovering} `}
      ref={dropRef}
    >
      {basket && <span className={styles.basket__text}>{basket.word}</span>}
    </span>
  );
};

export default Basket;
