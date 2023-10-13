import { SlidersProps } from "@/types/types";
import { rgbToHex } from "@/utils/utils.ts";
import React, { useEffect, useState } from "react";
import { useSlider } from "../context/SliderContext";

export const Sliders: React.FC<SlidersProps> = ({
  setUserHexCode,
  startingHexCode,
  userHexCode,
  gameActive,
}) => {
  const {
    redSlider,
    greenSlider,
    blueSlider,
    setRedSlider,
    setGreenSlider,
    setBlueSlider,
  } = useSlider();

  const updateHexState = () => {
    const hexCode = rgbToHex(redSlider, greenSlider, blueSlider);
    setUserHexCode(hexCode);
  };

  useEffect(() => {
    updateHexState();
  }, [redSlider, greenSlider, blueSlider]);

  return (
    <section className="flex flex-col justify-center items-center mt-20">
      <span className="flex">
        <div
          className={`w-20 h-20 border-2 m-4 `}
          style={{ backgroundColor: startingHexCode }}
        ></div>

        <div
          className={`w-20 h-20 border-2 m-4 `}
          style={{ backgroundColor: userHexCode }}
        ></div>
      </span>

      <section className="grid grid-cols-6 grid-rows-3 gap-4">
        <div className="row-start-1 col-span-1 flex items-center justify-center">
          Red
        </div>
        <input
          type="range"
          className="row-start-1 col-span-4"
          disabled={!gameActive}
          value={redSlider}
          min="0"
          max="255"
          onChange={(e) => {
            setRedSlider(Number(e.target.value));
          }}
        />
        <div className="row-start-1 col-span-1 flex items-center justify-center">
          {redSlider}
        </div>

        <div className="row-start-2 col-span-1 flex items-center justify-center">
          Green
        </div>
        <input
          type="range"
          className="row-start-2 col-span-4"
          disabled={!gameActive}
          value={greenSlider}
          min="0"
          max="255"
          onChange={(e) => {
            setGreenSlider(Number(e.target.value));
          }}
        />
        <div className="row-start-2 col-span-1 flex items-center justify-center">
          {greenSlider}
        </div>
        <div className="row-start-3 col-span-1 flex items-center justify-center">
          Blue
        </div>
        <input
          type="range"
          className="row-start-3 col-span-4"
          disabled={!gameActive}
          value={blueSlider}
          min="0"
          max="255"
          step="1"
          onChange={(e) => {
            setBlueSlider(Number(e.target.value));
          }}
        />
        <div className="row-start-3 col-span-1 flex items-center justify-center">
          {blueSlider}
        </div>
      </section>
    </section>
  );
};
