import React from "react";
import * as S from "./styles";

type GameButtonProps = {
  children: React.ReactNode;
  color: string;
  value: string | number;
  handleGameButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
};

export const GameButton = ({
  children,
  color,
  value,
  handleGameButtonClick,
  isActive,
}: GameButtonProps) => {
  return (
    <S.GameButton
      color={color}
      value={value}
      isActive={isActive}
      onClick={handleGameButtonClick}
    >
      {children}
    </S.GameButton>
  );
};
