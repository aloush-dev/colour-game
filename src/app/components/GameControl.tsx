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
      className="bg-slate-800 m-8 px-10 py-4 text-xl text-slate-200 rounded-lg"
    >
      PLAY
    </button>
  );
};
