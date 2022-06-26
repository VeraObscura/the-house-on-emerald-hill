import { useDrag } from "react-dnd";

import { WordType } from "types/word";
import { getRandomInt } from "helpers/helpers";
import styles from "./tile.module.scss";

interface TileProps extends WordType {
  isTextTile?: boolean;
  showText?: boolean;
}

const Tile = ({
  id,
  word,
  alignment,
  isTextTile = false,
  showText = false,
}: TileProps) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "tile",
    item: { id, word, alignment },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const random = getRandomInt(40) - getRandomInt(20);
  const m = getRandomInt(2) / 10;
  const randomMargin = `${getRandomInt(1) - getRandomInt(2)}em ${
    0 - getRandomInt(1)
  }em ${m}em ${m - m}em`;

  const isTileDragging = isDragging ? styles.tile__dragging : "";
  const displayText = showText ? styles.tile__plain : styles.tile__block;

  return (
    <span
      className={`${styles.tile} ${isTileDragging} ${displayText}`}
      ref={dragRef}
      style={
        !isDragging && !isTextTile
          ? { transform: `rotate(${random}deg)`, margin: randomMargin }
          : {}
      }
    >
      {word}
    </span>
  );
};

export default Tile;
