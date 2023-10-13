import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface SliderContextProps {
  redSlider: number;
  greenSlider: number;
  blueSlider: number;
  setRedSlider: Dispatch<SetStateAction<number>>;
  setGreenSlider: Dispatch<SetStateAction<number>>;
  setBlueSlider: Dispatch<SetStateAction<number>>;
  resetSliders: () => void;
}

const SliderContext = createContext<SliderContextProps | undefined>(undefined);

export function SliderContextProvider({ children }: { children: ReactNode }) {
  const [redSlider, setRedSlider] = useState(0);
  const [greenSlider, setGreenSlider] = useState(0);
  const [blueSlider, setBlueSlider] = useState(0);

  const resetSliders = () => {
    setRedSlider(0);
    setGreenSlider(0);
    setBlueSlider(0);
  };

  return (
    <SliderContext.Provider
      value={{
        redSlider,
        greenSlider,
        blueSlider,
        setRedSlider,
        setGreenSlider,
        setBlueSlider,
        resetSliders,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
}

export function useSlider() {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error("useMyComponent must be used within a MyComponentProvider");
  }
  return context;
}
