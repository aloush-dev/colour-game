import React, { useState } from "react";
import { GameControl } from "./GameControl";
import { Timer } from "./Timer";
import { Sliders } from "./Sliders";
import { Score } from "./Score";
import Image from "next/image";
import congratsImg from "../../../public/congratulation.png";
import { Leaderboard } from "./Leaderboard";

type GameBoardProps = {};

export const GameBoard: React.FC<GameBoardProps> = () => {
  const [userHexCode, setUserHexCode] = useState("#000000");
  const [startingHexCode, setStartingHexCode] = useState("#000000");
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState({ r: 0, g: 0, b: 0, total: 0 });

  return (
    <section className="flex flex-col justify-center items-center m-4">
      <div className="p-4">
        <div className="h-auto flex flex-col justify-center items-center">
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
            <>
              <div className="flex flex-col p-6 items-center justify-center rounded-3xl bg-slate-300 w-80 h-auto">
                {score.total ? (
                  <Image width={200} alt="congratulations" src={congratsImg} />
                ) : (
                  <div className="text-black text-center font-bold whitespace-pre-line">
                    <h1 className="text-xl">Welcome to the Color Game!</h1>
                    <p className="py-2">
                      You'll encounter two colorful squares and your goal is to
                      fine-tune the left square using the sliders to closely
                      match it with the right square.
                    </p>
                    <p className="py-2">
                      Achieve a perfect 100% match to secure your spot on the
                      leaderboard.
                    </p>
                  </div>
                )}

                <Score score={score} gameActive={gameActive} />
                <GameControl
                  setStartingHexCode={setStartingHexCode}
                  setGameActive={setGameActive}
                />
              </div>
              <Leaderboard />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
