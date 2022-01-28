import { GameData } from './index';

export type GamesState = {
  games: {
    min_cart_value: 0;
    types: GameData[];
    activeGame: GameData;
    selectedNumbers: string[];
  };
};