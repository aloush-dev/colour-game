import { TimerProps } from "@/types/types";
import { gameFinishPercentage } from "@/utils/utils.ts";
import React, { useEffect, useState } from "react";

export const Timer: React.FC<TimerProps> = ({
  setScore,
  setGameActive,
  startingHexCode,
  userHexCode,
}) => {
  const [timer, setTimer] = useState(10);
  useEffect(() => {
    if (timer > 0) {
      const timer = setInterval(() => {
        setTimer((currCount) => currCount - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    } else {
      setGameActive(false);
      setScore(gameFinishPercentage(startingHexCode, userHexCode));
    }
  }, [timer]);
  return (
    <div className="flex justify-center items-center">
      {timer === 0 ? "Time's up!" : `Time remaining: ${timer} seconds`}
    </div>
  );
};
