import React from "react";
import LastestManga from "./LastestManga";
import PopularManga from "./PopularManga";

function Home() {
  return (
    <main className="relative">
      <div className="fixed bottom-0 right-0 -z-10 h-1/2 w-1/3 rounded-tl-full bg-gradient-to-tr from-emerald-500 to-violet-500 opacity-40 blur-[80px]"></div>
      <PopularManga />
      <LastestManga />
    </main>
  );
}

export default Home;
