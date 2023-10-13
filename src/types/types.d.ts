export type Score = {
  r: number;
  g: number;
  b: number;
  total: number;
};

export type TimerProps = {
  setScore: React.Dispatch<React.SetStateAction<Score>>;
  setGameActive: React.Dispatch<React.SetStateAction<boolean>>;
  startingHexCode: string;
  userHexCode: string;
};

export type SlidersProps = {
  setUserHexCode: React.Dispatch<React.SetStateAction<string>>;
  startingHexCode: string;
  userHexCode: string;
  gameActive: boolean;
};
