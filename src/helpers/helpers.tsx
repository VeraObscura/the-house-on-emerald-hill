import { WordType } from "types/word";
import { BasketType } from "types/basket";
import Basket from "gameObjects/basket";
import Tile from "gameObjects/tile";

export const mapBaskets = (
  baskets: BasketType[],
  location: string,
  paragraph: string
) => {
  const mapped = baskets.map((basket, index) => {
    return (
      <Basket
        allowedWords={basket.allowedWords}
        word={basket.word}
        alignment={basket.alignment}
        location={location}
        paragraph={paragraph}
        index={index}
      />
    );
  });

  return mapped;
};

export const mapTiles = (inventory: WordType[], tiles: WordType[]) => {
  const tileIds = inventory.map((tile) => {
    return tile.id;
  });

  const mappedTiles = tiles.map((tile) => {
    return (
      <Tile
        id={tile.id}
        word={tile.word}
        alignment={tile.alignment}
        isTextTile={true}
        showText={tileIds.includes(tile.id)}
      />
    );
  });

  return mappedTiles;
};

export const checkTextBlockComplete = (baskets: JSX.Element[]) => {
  const words = baskets.map((basket) => {
    return basket.props.word;
  });

  if (!words.includes("")) {
    return true;
  }
  return false;
};

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};
