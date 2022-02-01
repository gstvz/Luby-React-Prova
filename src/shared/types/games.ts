export type GameData = {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
};

export type GamesState = {
  games: {
    min_cart_value: 0;
    types: GameData[];
    activeGame: GameData;
    selectedNumbers: string[];
  };
};