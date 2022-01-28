import { GameData } from './index';

export type GamesState = {
  games: {
    min_cart_value: 0;
    types: GameData[];
    activeGame: {
      id: 0;
      type: "";
      description: "";
      range: 0;
      price: 0;
      "max-number": 0;
      color: "";
    };
  };
};