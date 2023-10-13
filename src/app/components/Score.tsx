import React, { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

type ScoreProps = {
  score: { r: number; g: number; b: number; total: number };
  gameActive: boolean;
};

export const Score: React.FC<ScoreProps> = ({ score, gameActive }) => {
  const [name, setName] = useState("");
  const { width, height } = useWindowSize();

  return (
    <>
      {score.total ? (
        <>
          <div className="flex flex-col justify-center items-center text-black p-4 text-center">
            <span className="text-4xl font-black p-4 text-green-500">
              {score.total}% Score
            </span>
            <span className="font-bold">Red : {score.r.toFixed(0)}% </span>
            <span className="font-bold">Green : {score.g.toFixed(0)}%</span>
            <span className="font-bold">Blue : {score.b.toFixed(0)}%</span>
          </div>
          {score.total === 100 ? (
            <div className="flex justify-center items-center flex-col text-black">
              <Confetti width={width} height={height} />
              <span className="font-bold text-center">100%? AMAZING.</span>
              <input
                className="p-2 rounded-lg m-2"
                placeholder="Whats yours name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
              ></input>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};
