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
    min_cart_value: number;
    types: GameData[];
    activeGame: GameData;
    selectedNumbers: string[];
    bets: Bet[];
    cartTotal: number;
  };
};

export type Bet = {
  game_id: number;
  numbers: string[];
};

export type Bets = {
  games: { 
    game_id: number; 
    numbers: number[] 
  }[];
};
