"use client";

import { Header } from "./components/Header";
import { SliderContextProvider, useSlider } from "./context/SliderContext.tsx";
import { GameBoard } from "./components/GameBoard.tsx";
export default function Home() {
  return (
    <SliderContextProvider>
      <main className="h-screen w-screen bg-[#24293f] text-white flex flex-col">
      <Header />
        <GameBoard />
      </main>
    </SliderContextProvider>
  );
}
