import styles from "./tile.module.scss";

interface TileProps {
  word: string;
}

const Tile = ({ word }: TileProps) => {
  return (
    <div className={styles.tile}>
      <span>{word}</span>
    </div>
  );
};

export default Tile;
