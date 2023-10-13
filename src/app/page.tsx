"use client";

import { Header } from "./components/Header";
import { SliderContextProvider, useSlider } from "./context/SliderContext.tsx";
import { GameBoard } from "./components/GameBoard.tsx";
import Link from "next/link";
export default function Home() {
  return (
    <SliderContextProvider>
      <main className="min-h-screen w-screen bg-[#24293f] text-white flex flex-col">
        <Header />
        <GameBoard />
        <div className="text-center flex justify-center items-end p-4 underline">
          <Link href="https://www.aloush.dev" target="_blank">
            aloush.dev
          </Link>
        </div>
      </main>
    </SliderContextProvider>
  );
}
