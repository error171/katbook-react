import { React, useEffect } from "react";
import "./Manga.css";
import { FaEllipsisH, FaRegBookmark, FaRegClock } from "react-icons/fa";
import { HiBookOpen } from "react-icons/hi";
import { MangaStats } from "../../components/MangaStats";
import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function Banner(props) {
  return (
    <div
      id="banner"
      className="banner-container h-64  overflow-hidden md:h-72 lg:h-64 xl:h-[300px]"
    >
      <div
        className="-z-10 h-full w-full bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${props.url})` }}
      ></div>
      {/* <div className="absolute inset-0  bg-gradient-to-r backdrop-blur from-slate-900/90 to-transparent"></div> */}
    </div>
  );
}
function MangaCover(props) {
  return (
    <div className="relative h-auto w-1/2 rounded-md sm:row-span-2 sm:w-full">
      {<img
        className="z-10 h-full w-full rounded-md object-cover object-center"
        src={props.url}
      /> || <Skeleton height={'100%'}/>}
    </div>
  );
}
function MangaInfo(props) {
  return (
    <div className="flex flex-col gap-1 sm:col-span-full sm:col-start-2 sm:row-start-1 sm:text-white">
      <h1
        aria-label="Title"
        className="text-2xl font-semibold leading-7 sm:text-4xl xl:text-5xl"
      >
        {props.title}
      </h1>
      <h2 aria-label="Alternative Title" className="leading-5 xl:text-2xl ">
        {props.altTitle}
      </h2>

      <div className="text-sm sm:text-lg">{props.author}</div>
      <div className="text-sm font-medium lg:text-base">
        Publication: {props.publicationDate},
        {props.status === "ongoing" ? (
          <span className="text-blue-400"> Ongoing</span>
        ) : props.status === "completed" ? (
          <span className="text-green-400 "> Completed</span>
        ) : props.status === "cancelled" ? (
          <span className="text-red-400 "> Cancelled</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
function Tag(props) {
  return (
    <div className="flex flex-wrap gap-1 place-self-start sm:col-span-3 md:mt-2	">
      {props.tags.map((item, index) => (
        <a
          href={item.url}
          className="rounded bg-slate-200 px-1.5 text-xs font-semibold text-slate-600 dark:bg-slate-700/80 dark:text-slate-300 md:text-sm"
          key={index}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
function Buttons(props) {
  return (
    <div className="inline-flex  w-full gap-2 sm:col-span-2 sm:col-start-2 sm:row-start-2 sm:items-end">
      <button className="inline-flex aspect-square  h-12 w-12 items-center justify-center rounded-lg bg-slate-200 shadow-md active:bg-slate-300 dark:bg-slate-800 dark:active:bg-slate-800/70 sm:order-last">
        <FaEllipsisH size={20} />
      </button>
      <button className="inline-flex aspect-square h-12 w-12 items-center justify-center rounded-lg bg-slate-200 shadow-md active:bg-slate-300 dark:bg-slate-800 dark:active:bg-slate-800/70">
        <FaRegBookmark size={20} />
      </button>
      <a
        href={props.url}
        className="inline-flex h-12 grow cursor-pointer items-center justify-center gap-1 rounded-lg bg-emerald-500 font-bold shadow-lg shadow-emerald-300 active:bg-emerald-600  dark:shadow-emerald-800 sm:order-first"
      >
        <HiBookOpen size={24} />
        Read
      </a>
    </div>
  );
}
function Description(props) {
  const [showMore, setShowMore] = useState(false); // show more is false by default

  return (
    <div className="mt-2 text-sm sm:col-span-4 xl:text-base">
      <div
        className="relative truncate whitespace-pre-line border-b border-emerald-500/80 p-1"
        onClick={() => setShowMore(!showMore)} // toggle show more
      >
        {/* overlay */}
        {!showMore ? (
          <div className="absolute inset-0 bg-gradient-to-t from-slate-100  via-transparent to-transparent  dark:from-slate-900"></div>
        ) : (
          ""
        )}
        {/* // substring the description */}
        {showMore ? props.text : `${props.text.substring(0, 150)}...`}
      </div>
      <div className="flex w-full justify-center ">
        <button
          onClick={() => setShowMore(!showMore)} // toggle show more
          className="rounded-b bg-emerald-500/80 px-2 font-medium"
        >
          {showMore ? "⬆ Show less" : "⬇ Show more"}
        </button>
      </div>
    </div>
  );
}
function ChapterList(props) {
  return (
    <div className=" w-full sm:col-span-4">
      <div className="my-2 flex items-center justify-between">
        <h1 className="text-xl xl:text-2xl">Chapters</h1>
        <select className="rounded bg-slate-200 pr-8 text-sm dark:bg-slate-800">
          <option value="newest">Newest Chapter</option>
          <option value="oldest">Oldest Chapter</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        {props.chapters.map((item, index) => (
          <a
            href={item.url}
            className="flex cursor-pointer items-center justify-between gap-1 rounded bg-slate-200 py-0.5 px-2 text-sm font-medium transition-all ease-linear hover:text-emerald-500  dark:bg-slate-800 xl:text-base"
            key={index}
          >
            <div className="inline-flex gap-1 truncate">
              <div className="">Chapter {item.chapter}:</div>
              <div className="truncate">{item.title}</div>
            </div>
            <time className="ml-1 inline-flex min-w-fit items-center gap-1 text-xs xl:text-sm">
              <FaRegClock /> {item.date}
            </time>
          </a>
        )) || <Skeleton count={1} />}
      </div>
    </div>
  );
}

function Manga() {
  let chapters = [
    {
      chapter: 1,
      title: "The new world",
      date: "2020-01-01",
      url: "#",
    },
    {
      chapter: 2,
      title: "Three trees",
      date: "2020-01-02",
    },
    {
      chapter: 3,
      title: "tree sssss sss ssss sss sss ssss",
      date: "2020-01-02",
    },
  ];
  let tags = [
    {
      name: "Action",
      url: "#",
    },
    {
      name: "Adventure",
      url: "#",
    },
    {
      name: "Comedy",
      url: "#",
    },
    {
      name: "Drama",
      url: "#",
    },
    {
      name: "Fantasy",
      url: "#",
    },
    {
      name: "Historical",
      url: "#",
    },
    {
      name: "Horror",
      url: "#",
    },
    {
      name: "Drama",
      url: "#",
    },
    {
      name: "Fantasy",
      url: "#",
    },
    {
      name: "Historical",
      url: "#",
    },
    {
      name: "Horror",
      url: "#",
    },
  ];
  const year = new Date().getFullYear();
  return (
    <main className="relative">
      <Banner url="https://api.lorem.space/image/movie?w=500&hash=3dwnfq7k" />
      <section className="mt-2 grid grid-cols-1 justify-items-center gap-3 sm:grid-cols-4 xl:grid-cols-5">
        <MangaCover url="https://api.lorem.space/image/movie?w=500&hash=3dwnfq7k" />
        <div className="sm:col-start-1">
          <MangaStats size={"16px"} rating={4.2} save={2121} view={3423} />
        </div>
        <MangaInfo
          title="Lorem ipsum dolor sitam et. Quisqu natus!"
          altTitle="onsectetur adipisicing elit. Quisquam, natus!"
          author="Ak wdMA, wak d"
          publicationDate={year}
          status="completed"
        />
        <Tag tags={tags} />
        <Buttons />
        <Description
          text="1orem ipsum, dolor sit amet consectetur adipisicing elit. Illum optio excepturi soluta harum expedita, molestias debitis pariatur a ducimus incidunt perferendis quam nemo quae, possimus id error, nam impedit dolores?
         2orem ipsum, dolor s
         
         it amet consectetur adipisicing elit. Accusamus, officia fugiat assumenda eveniet laboriosam odit, soluta doloribus fugit veniam animi totam facilis saepe expedita optio atque reprehenderit, minima natus culpa minus tempora modi provident. Deleniti quis quo tempora voluptatem officia?"
        />
        <ChapterList chapters={chapters} />
      </section>
    </main>
  );
}

export default Manga;
