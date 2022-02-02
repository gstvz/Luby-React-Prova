import { Bet, Bets } from "../types";

type TransformedGame = {
  game_id: number;
  numbers: number[];
};

export function createBet(cartGames: Bet[]) {
  const bet: Bets = { games: [] };

  for (const game of cartGames) {
    const transformedGame: TransformedGame = {
      game_id: game.game_id,
      numbers: [],
    };
    for (const number of game.numbers) {
      const transformedNumber = parseInt(number);
      transformedGame.numbers.push(transformedNumber);
    }
    bet.games.push(transformedGame);
  }
  return bet;
}
