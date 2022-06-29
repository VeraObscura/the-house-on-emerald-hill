export interface TileType {
  id: number;
  word: string;
  alignment: number;
  customStyle?: { transform: string; margin: string };
  isTextTile?: boolean;
  showText?: boolean;
}
