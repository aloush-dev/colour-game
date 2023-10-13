"use client";

import { Header } from "./components/Header";
import { SliderContextProvider, useSlider } from "./context/SliderContext.tsx";
import { GameBoard } from "./components/GameBoard.tsx";
export default function Home() {
  return (
    <SliderContextProvider>
      <Header />
      <main className="h-screen w-screen bg-slate-800 text-white flex flex-col">
        <GameBoard />
      </main>
    </SliderContextProvider>
  );
}
