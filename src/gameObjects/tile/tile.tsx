import { useDrag } from "react-dnd";

import { TileType } from "types/tile";
import styles from "./tile.module.scss";

const Tile = ({
  id,
  word,
  alignment,
  customStyle,
  isTextTile = false,
  showText = false,
}: TileType) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "tile",
    item: { id, word, alignment },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const isTileDragging = isDragging ? styles.tile__dragging : "";
  const displayText = showText ? styles.tile__plain : styles.tile__block;

  return (
    <span
      className={`${styles.tile} ${isTileDragging} ${displayText}`}
      ref={dragRef}
      style={customStyle}
    >
      {word}
    </span>
  );
};

export default Tile;
