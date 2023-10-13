import React from "react";

type ScoreProps = {
  score: { r: number; g: number; b: number; total: number };
  gameActive: boolean;
};

export const Score: React.FC<ScoreProps> = ({ score, gameActive }) => {
  return (
    <>
      {score.total ? (
        <div className="flex flex-col justify-center items-center text-black p-4 text-center">
          <span className="text-4xl font-black p-4 text-green-500">
            {score.total}% Score
          </span>
          <span className="font-bold">Red : {score.r.toFixed(0)}% </span>
          <span className="font-bold">Green : {score.g.toFixed(0)}%</span>
          <span className="font-bold">Blue : {score.b.toFixed(0)}%</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
