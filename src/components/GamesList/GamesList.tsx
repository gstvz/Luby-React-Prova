import React from "react";
import * as S from "./styles";
import { formatDate, formatToBRL, padNumbers } from "@helpers";
import { GameData, UserBets } from "@types";

type GamesListProps = {
  games: GameData[];
  activeGame: GameData;
  userBets: UserBets;
};

export const GamesList = ({ games, activeGame, userBets }: GamesListProps) => {
  return (
    <S.RecentGamesList>
      {userBets.map((bet) => {
        const color = games.find(
          (game) => game.id === bet.type.id
        )?.color;
        const date = formatDate(bet.created_at!);
        return (
          <S.RecentGamesItem key={bet.id} color={color}>
            <S.RecentGamesItemNumbers>
              {padNumbers(bet.choosen_numbers!)}
            </S.RecentGamesItemNumbers>
            <S.RecentGamesItemDateAndPrice>
              {`${date} - (${formatToBRL(bet.price!)})`}
            </S.RecentGamesItemDateAndPrice>
            <S.RecentGamesItemName color={color}>
              {bet.type.type}
            </S.RecentGamesItemName>
          </S.RecentGamesItem>
        );
      })}
    </S.RecentGamesList>
  );
};
