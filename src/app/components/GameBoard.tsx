import React, { useState } from "react";
import { GameControl } from "./GameControl";
import { Timer } from "./Timer";
import { Sliders } from "./Sliders";

type GameBoardProps = {};

export const GameBoard: React.FC<GameBoardProps> = () => {
  const [userHexCode, setUserHexCode] = useState("#000000");
  const [startingHexCode, setStartingHexCode] = useState("#000000");
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState({ r: 0, g: 0, b: 0, total: 0 });

  return (
    <section className="flex flex-col justify-center items-center m-4">
      <div className="h-14">
        {gameActive ? (
          ""
        ) : (
          <GameControl
            setStartingHexCode={setStartingHexCode}
            setGameActive={setGameActive}
          />
        )}
      </div>

      {gameActive ? (
        <Timer
          setScore={setScore}
          setGameActive={setGameActive}
          startingHexCode={startingHexCode}
          userHexCode={userHexCode}
        />
      ) : (
        ""
      )}

      {score.total ? (
        <>
          <div>{gameActive ? "" : `${score.total}%`}</div>
          <div>
            Red : {score.r.toFixed(0)}% // Green : {score.g.toFixed(0)}% // Blue
            : {score.b.toFixed(0)}%
          </div>
        </>
      ) : (
        ""
      )}

      <Sliders
        setUserHexCode={setUserHexCode}
        startingHexCode={startingHexCode}
        userHexCode={userHexCode}
        gameActive={gameActive}
      />
    </section>
  );
};
