import React from "react";
// import "./Manga.css";
import {
  FaBook,
  FaBookmark,
  FaBookOpen,
  FaBookReader,
  FaEllipsisH,
  FaRegBookmark,
} from "react-icons/fa";
import { HiBookOpen } from "react-icons/hi";
import { MangaStats } from "../../components/MangaStats";
import { useState } from "react";

function Banner(props) {
  return (
    <div
      id="banner"
      className="banner-container absolute top-0 left-0 -z-10 h-64 w-full overflow-hidden brightness-[0.70]"
    >
      <div
        className="-z-10 h-full w-full bg-cover bg-fixed bg-center bg-no-repeat blur-xl"
        style={{ backgroundImage: `url(${props.url})` }}
      ></div>
    </div>
  );
}
function MangaCover(props) {
  return (
    <div className="aspect-[5/7] h-auto w-1/2 overflow-hidden rounded-md">
      <img
        className="h-full w-full object-cover object-center"
        src={props.url}
      />
    </div>
  );
}
function MangaInfo(props) {
  return (
    <div className="flex flex-col gap-1 lg:col-span-4">
      <h1
        aria-label="Title"
        className="text-2xl font-semibold leading-7 sm:text-4xl xl:text-5xl"
      >
        {props.title}
      </h1>
      {/* <h2 aria-label="Alternative Title" className="leading-5 xl:text-2xl ">
        {props.altTitle}
      </h2> */}

      <div id="author" className="text-sm sm:text-lg">
        {props.author}
      </div>
    </div>
  );
}
function Tag(props) {
  let tagList = props.tags.map((item, index) => {
    return (
      <span
        className="rounded bg-slate-700/80 px-1.5 text-xs font-semibold text-slate-300 md:text-sm"
        key={index}
      >
        {item}
      </span>
    );
  });

  return <div className="flex flex-wrap gap-1 place-self-start	">{tagList}</div>;
}
function Buttons(props) {
  return (
    <div className="inline-flex w-full gap-2 lg:col-span-4">
      <button className="inline-flex  aspect-square h-12 w-12 items-center justify-center rounded-md bg-slate-800 active:bg-slate-800/70">
        <FaEllipsisH size={20} />
      </button>
      <button className="inline-flex aspect-square h-12 w-12 items-center justify-center rounded-md bg-slate-800 active:bg-slate-800/70">
        <FaRegBookmark size={20} />
      </button>
      <a
        href={props.url}
        className="inline-flex cursor-pointer h-12 grow items-center justify-center gap-1 rounded-md bg-emerald-500 font-bold text-slate-800 shadow-lg shadow-emerald-800 active:bg-emerald-600"
      >
        <HiBookOpen size={24} />
        Read
      </a>
    </div>
  );
}
function Description(props) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="text-sm xl:text-base">
      <div
        className="whitespace-pre-line"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? props.text : `${props.text.substring(0, 150)}...`}
      </div> 
      <div
        className="flex w-full justify-center text-clip border-t border-emerald-500 "
        onClick={() => setShowMore(!showMore)}
      >
        <button className="rounded-b bg-emerald-500 px-2 font-semibold text-slate-900">
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
}
function ChapterList(props) {
  return (
    <div className=" w-full lg:col-span-4">
      <h1 className="text-xl my-2 xl:text-2xl">Chapters</h1>
      <div className="flex flex-col gap-1.5">
        {props.chapters.map((item, index) => (
          <a href={props.url}
            className="flex cursor-pointer ease-linear transition-all hover:text-emerald-400 border-l-2 border-transparent hover:border-emerald-400 xl:text-base items-center text-sm justify-between gap-1 rounded bg-slate-800 py-0.5 px-2 font-medium"
            key={index}
          >
            <div  className="inline-flex truncate gap-1">
              <div className="">Chapter {item.chapter}:</div>
              <div className="truncate">{item.title}</div>
            </div>
            <time className="text-xs ml-1 min-w-fit">{item.date}</time>
          </a>
        ))}
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
  return (
    <main className="relative">
      <Banner url="https://api.lorem.space/image/movie?w=500&hash=3dwnfq7k" />
      <section className="grid grid-cols-1 justify-items-center gap-3 lg:px-10">
        <MangaCover url="https://api.lorem.space/image/movie?w=500&hash=3dwnfq7k" />

        <MangaStats rating={4.2} save={2121} status="completed" />
        <MangaInfo
          title="Lorem ipsum dolor sitam et. Quisqu natus!"
          altTitle="onsectetur adipisicing elit. Quisquam, natus!"
          author="Ak wdMA, wak d"
        />
        <Tag
          tags={[
            "Action",
            "Comedy",
            "Sport",
            "Romance",
            "Quisquam",
            "natus",
            "adipisicing",
          ]}
        />
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
