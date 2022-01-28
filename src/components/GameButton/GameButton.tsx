import React from "react";
import * as S from "./styles";

type GameButtonProps = {
  children: React.ReactNode;
  color: string;
  value: number;
  handleGameButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
};

export const GameButton = (props: GameButtonProps) => {
  return (
    <S.GameButton
      color={props.color}
      value={props.value}
      isActive={props.isActive}
      onClick={props.handleGameButtonClick}
    >
      {props.children}
    </S.GameButton>
  );
};
