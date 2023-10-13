import { getStartingColour } from "@/utils/utils";
import { useSlider } from "../context/SliderContext";
import React from "react";

type GameControlProps = {
  setStartingHexCode: React.Dispatch<React.SetStateAction<string>>;
  setGameActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GameControl: React.FC<GameControlProps> = ({
  setStartingHexCode,
  setGameActive,
}) => {
  const { resetSliders } = useSlider();

  const startGame = () => {
    resetSliders();
    setStartingHexCode(() => {
      return getStartingColour();
    });
    setGameActive(true);
  };

  return (
    <button
      onClick={startGame}
      className="bg-slate-300 px-4 py-2 text-slate-800 rounded "
    >
      start
    </button>
  );
};
