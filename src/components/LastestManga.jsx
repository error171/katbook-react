import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Manga, login } from "mangadex-full-api";

// TypeScript Example:
import MFA from "mangadex-full-api";
// You can also import directly like:
// import { Manga, login } from 'mangadex-full-api';
const username = "Demond_Corkery";
const password = "hC7wQ7DAnFvFMXa";

function Card(props) {
  return (
    <div className="">
      <div className="relative rounded overflow-hidden aspect-[3/4]">
        {props.url ? (
          <img className="object-cover w-full h-full" src={props.url} alt="" />
        ) : (
          <Skeleton height="100%" />
        )}
      </div>
      <h1 className="mt-1 font-medium leading-tight line-clamp-2">
        {props.title || <Skeleton count={2} />}
      </h1>
      <div className="text-sm text-slate-300">
        {props.lastChapter ? (
          "Chapter " + props.lastChapter
        ) : (
          <Skeleton count={1} width="50%" />
        )}
      </div>
    </div>
  );
}
function LastestManga() {
  return (
    <>
      <SkeletonTheme baseColor="#475569" highlightColor="#64748b">
        <div className="z-10 py-3 text-2xl font-medium md:text-3xl">Latest Updates</div>
        <div className="inline-grid w-auto grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 ">
          <Card
            url="https://api.lorem.space/image/movie?w=300&hash=a6xlkwed"
            lastChapter="2"
            title="Lorem ipsum dolor sit amet consect adipisicing."
          />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </SkeletonTheme>
    </>
  );
}

export default LastestManga;
