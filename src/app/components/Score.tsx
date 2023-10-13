"use client";
import React, { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../utils/firebase";

type ScoreProps = {
  score: { r: number; g: number; b: number; total: number };
  gameActive: boolean;
};

export const Score: React.FC<ScoreProps> = ({ score, gameActive }) => {
  const [name, setName] = useState("");
  const { width, height } = useWindowSize();
  const [disableButton, setDisableButton] = useState(false);
  const [buttonText, setButtonText] = useState("SUBMIT");

  const addName = async () => {
    setDisableButton(true);
    const collectionRef = collection(db, "leaderboard");

    try {
      await addDoc(collectionRef, {
        name: name,
        time: serverTimestamp(),
      });
      setButtonText("SUCCESS");
      setName("");
    } catch (error) {
      setDisableButton(false);
      setButtonText("ERROR");
    }
  };

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
              {buttonText === "SUCCESS" ? (
                ""
              ) : (
                <>
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
                  <button
                    className="bg-slate-800 px-6 py-2 text-md text-slate-200 rounded-lg"
                    disabled={disableButton}
                    onClick={addName}
                  >
                    {buttonText}
                  </button>
                </>
              )}
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
