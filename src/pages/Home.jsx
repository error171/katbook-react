import React from "react";
import { useState } from "react";
import LastestManga from "../components/LastestManga";
import PopularManga from "../components/PopularManga";

function Home() {
  return (
    <>
    {/* <div className="fixed bottom-0 bg-gradient-to-br from-emerald-500 to-indigo-500 rounded-full opacity-50 left-20 filter blur-3xl w-[500px] h-96"></div> */}
    <div className="fixed bottom-0 right-0 w-1/2 rounded-tl-full blur-[80px] -z-10 opacity-40 bg-gradient-to-br from-emerald-500 to-violet-500 h-1/2"></div>
    <main className="">
      <PopularManga />
      <LastestManga />
    </main>
    </>
  );
}

export default Home;
