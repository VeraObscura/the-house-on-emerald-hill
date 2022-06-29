import { useAppSelector } from "redux/hooks";

import { TileType } from "types/tile";
import { BasketType } from "types/basket";
import { mapBaskets, mapTiles, checkTextBlockComplete } from "helpers/helpers";

import TextBlock from "gameObjects/textBlock";

interface NarrativeProps {
  tiles: TileType[];
  baskets: BasketType[];
}

export const DATE = () => {
  return (
    <TextBlock isComplete={false} isDate={true}>
      August 23, 1991
    </TextBlock>
  );
};

export const PARA_1 = ({ baskets }: NarrativeProps) => {
  const basketComponents = mapBaskets(baskets, "foyer", "para1");

  return (
    <TextBlock isComplete={checkTextBlockComplete(basketComponents)}>
      Hi Lawrence, me again. Sorry for the
      {basketComponents[0]}. Your funeral was the day before last. I haven't
      felt like writing
      {basketComponents[1]}.
    </TextBlock>
  );
};

export const PARA_2 = ({ tiles }: NarrativeProps) => {
  const inventory = useAppSelector((state) => state.inventory.tiles);
  const tileComponents = mapTiles(inventory, tiles);

  return (
    <TextBlock isComplete={false}>
      I don't know what I'm doing. I{tileComponents[0]}
      you so much. I just need to talk to you in some way, any way, even through
      this diary. Life feels so quiet right now, I have so little to do, it
      seems all I have time to do is think. Think and remember.
    </TextBlock>
  );
};

export const PARA_3 = ({ tiles, baskets }: NarrativeProps) => {
  return (
    <TextBlock isComplete={false}>
      When you got sick, you needed to lie in bed in just the right way, and
      stopped being able to hold me the way you used to. Over time, I actually
      forgot what it felt like to fall asleep to the warmth of your breath on my
      shoulders. I remember things like that now.
    </TextBlock>
  );
};

export const PARA_4 = ({ tiles, baskets }: NarrativeProps) => {
  return (
    <TextBlock isComplete={false}>
      When you came along, I was just getting accustomed to the joy of
      discovery, the confidence that came with standing on my own two feet. I
      never expected how much I would enjoy having you sweeping me off them.
    </TextBlock>
  );
};

export const PARA_5 = ({ tiles, baskets }: NarrativeProps) => {
  return (
    <TextBlock isComplete={false}>
      It took a while, but eventually I felt safe enough to tell you what it was
      like for me growing up. I told you I never wanted to be one of those girls
      that crossed the foyer of my father's house, barely seeing the sunlight
      before she was once again cloistered under her husband's roof. You
      understood completely. I knew I loved you then.
    </TextBlock>
  );
};

export const PARA_6 = ({ tiles, baskets }: NarrativeProps) => {
  return (
    <TextBlock isComplete={false}>
      I surprised my friends when I told you “yes” when you proposed, you know.
      Again, when you got sick, I surprised everyone at the firm when I turned
      in my request for an unpaid leave of absence. I was just so determined to
      nurse you back to health. My mother always called me an impulsive child,
      someone prone to “breaking everything I touched”. Maybe it would have
      surprised her that you were getting better.
    </TextBlock>
  );
};

export const PARA_7 = ({ tiles, baskets }: NarrativeProps) => {
  return (
    <TextBlock isComplete={false}>
      I'm just full of surprises, I guess.
    </TextBlock>
  );
};
