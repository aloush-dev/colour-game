import React, { useState } from "react";
import { GameControl } from "./GameControl";
import { Timer } from "./Timer";
import { Sliders } from "./Sliders";
import { Score } from "./Score";
import Image from "next/image";
import congratsImg from "../../../public/congratulation.png";

type GameBoardProps = {};

export const GameBoard: React.FC<GameBoardProps> = () => {
  const [userHexCode, setUserHexCode] = useState("#000000");
  const [startingHexCode, setStartingHexCode] = useState("#000000");
  const [gameActive, setGameActive] = useState(true);
  const [score, setScore] = useState({ r: 0, g: 0, b: 0, total: 0 });

  return (
    <section className="flex flex-col justify-center items-center m-4">
      <div className="p-4">
        <div className="h-auto flex justify-center items-center">
          {gameActive ? (
            <div className="bg-[#30445c] p-12 rounded-xl">
              <Timer
                setScore={setScore}
                setGameActive={setGameActive}
                startingHexCode={startingHexCode}
                userHexCode={userHexCode}
              />
              <Sliders
                setUserHexCode={setUserHexCode}
                startingHexCode={startingHexCode}
                userHexCode={userHexCode}
                gameActive={gameActive}
              />
            </div>
          ) : (
            <div className="flex flex-col p-6 items-center justify-center rounded-3xl bg-slate-300 w-80 h-auto">
              {score.total ? (
                <Image width={200} alt="congratulations" src={congratsImg} />
              ) : (
                ""
              )}

              <Score score={score} gameActive={gameActive} />
              <GameControl
                setStartingHexCode={setStartingHexCode}
                setGameActive={setGameActive}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
