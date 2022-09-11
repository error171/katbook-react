import { React, useEffect } from "react";
import {
  FaBookmark,
  FaChevronLeft,
  FaChevronRight,
  FaEllipsisH,
  FaRegBookmark,
  FaRegClock,
} from "react-icons/fa";
import { HiBookOpen } from "react-icons/hi";
import { MangaStats } from "../../components/MangaStats";
import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link, useLocation } from "react-router-dom";
import { request } from "../../api/axios";
import qs from "qs";
function Banner(props) {
  return (
    <div
      className="absolute inset-0 -z-10 h-64 overflow-hidden from-slate-50 to-slate-50/40 after:absolute after:inset-0 after:bg-gradient-to-t  dark:from-slate-900 dark:to-slate-900/30 md:h-72 lg:h-64 xl:h-[300px]"
    >
      <div
        className="-z-10 h-full w-full bg-cover bg-fixed bg-center blur"
        style={{ backgroundImage: `url(${props.url})` }}
      ></div>
      {/* <img src={props.url} className="w-full blur bg-no-repeat bg-cover bg-center bg-fixed" /> */}
    </div>
  );
}
function MangaCover(props) {
  return (
    <div className="relative h-auto w-1/2 rounded-md sm:row-span-2 sm:w-full">
      {(
        <img
          className="z-10 h-full w-full  rounded-md object-cover object-center shadow-lg"
          src={props.url}
        />
      ) || <Skeleton height={"100%"} />}
    </div>
  );
}
function MangaInfo(props) {
  return (
    <div className="flex w-full flex-col gap-1 justify-self-start sm:col-span-full sm:col-start-2 sm:row-start-1 ">
      <h1
        aria-label="Title"
        className="break-words text-2xl font-semibold leading-7 sm:text-4xl "
      >
        {props.title}
      </h1>
      <h2 aria-label="Alternative Title" className="leading-5 xl:text-2xl ">
        {props.altTitle}
      </h2>

      <div className="text-sm sm:text-lg">
        {props.author} , {props.artist}
      </div>
      <div className="text-sm font-medium lg:text-base">
        Publication: {props.year || "N/A"},
        {props.status === "ongoing" ? (
          <span className="text-blue-600 dark:text-blue-400"> Ongoing</span>
        ) : props.status === "completed" ? (
          <span className="text-green-600 dark:text-green-400 "> Completed</span>
        ) : props.status === "cancelled" ? (
          <span className="text-red-600 dark:text-red-400"> Cancelled</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
function Tag(props) {
  return (
    <div className="flex flex-wrap gap-1 place-self-start sm:col-start-1 sm:col-span-full md:mt-2	">
      {props.tags?.map((item, index) => (
        <a
          href="#"
          className="rounded bg-slate-200 px-1.5 text-xs font-semibold text-slate-600 dark:bg-slate-700/80 dark:text-slate-300 md:text-sm"
          key={index}
        >
          {item.attributes.name.en}
        </a>
      ))}
    </div>
  );
}
function Buttons(props) {
  const [bookmark, setBookmark] = useState(false);
  const handleBookmark = () => {
    setBookmark(!bookmark);
  }
  return (
    <div className="inline-flex  w-full gap-2 sm:col-span-2 sm:col-start-2 sm:row-start-2 sm:items-end">
      <button className="inline-flex aspect-square  h-12 w-12 items-center justify-center rounded-lg bg-slate-200 shadow-md active:bg-slate-300 dark:bg-slate-800 dark:active:bg-slate-800/70 sm:order-last">
        <FaEllipsisH size={20} />
      </button>
      <button onClick={handleBookmark} className="inline-flex aspect-square h-12 w-12 items-center justify-center rounded-lg bg-slate-200 shadow-md dark:bg-slate-800 ">
        { !bookmark ? <FaRegBookmark size={20} />:
        <FaBookmark size={20} className="text-emerald-400 dark:text-emerald-500"/>}
      </button>
      <Link
        to={"/chapter/" + props.id}
        className="inline-flex h-12 grow cursor-pointer items-center justify-center gap-1 rounded-lg bg-emerald-400 font-bold shadow-lg ease-linear duration-200 hover:shadow-emerald-300 dark:bg-emerald-500  dark:hover:shadow-emerald-800 sm:order-first"
      >
        <HiBookOpen size={24} />
        Read
      </Link>
    </div>
  );
}
function Description(props) {
  const [showMore, setShowMore] = useState(false); // show more is false by default
  return (
    <div className="mt-2 w-full text-sm sm:col-span-full xl:text-base">
      <div className="relative overflow-hidden whitespace-pre-line border-b border-emerald-500/80 p-1 py-3">
        {/* overlay */}
        {props.text?.length > 150 &&
          (!showMore ? (
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100  via-transparent to-transparent  dark:from-slate-900"></div>
          ) : (
            ""
          ))}
        {/* // substring the description */}
        {showMore ? props.text : `${props.text?.substring(0, 150)}...`}
      </div>
      <div className="flex w-full justify-center ">
        {props.text?.length > 150 && (
          <button
            onClick={() => setShowMore(!showMore)} // toggle show more
            className="rounded-b bg-emerald-400/80 px-2 text-sm font-medium"
          >
            {showMore ? "⬆ Show less" : "⬇ Show more"}
          </button>
        )}
      </div>
    </div>
  );
}
function ChapterList(props) {
  const [sortState, setSortState] = useState("descending");
  const [chapterList, setChapterList] = useState(null)
  console.log(chapterList)
  useEffect(() => {
    setChapterList(props.chapters)
    sortState ? 'ascending' : setChapterList(chapterList.reverse());
  },[])
  return (
    <div className=" w-full sm:col-span-full">
      <div className="my-2 flex items-center justify-between">
        <h1 className="text-xl xl:text-2xl">Chapters</h1>
        <select
          defaultValue={"descending"}
          onChange={(e) => {
            console.log(e.target.value);
            setSortState(e.target.value);
          }}
          className="rounded bg-slate-200 pr-8 text-sm dark:bg-slate-800"
        >
          <option value="descending">Newest Chapter</option>
          <option value="ascending">Oldest Chapter</option>
        </select>
      </div>
      <div className="flex flex-col  gap-1.5">
        {chapterList?.map((chapter, index) => (
            <Link
              to={"/chapter/" + chapter.id}
              className="flex cursor-pointer items-center justify-between gap-1 rounded bg-slate-100 py-0.5 px-2 text-sm font-medium transition-all ease-linear hover:text-emerald-500 dark:hover:text-emerald-400  dark:bg-slate-800 xl:text-base"
              key={index}
            >
              <div className="inline-flex items-center gap-1 truncate">
                <div className="">Chapter {chapter.attributes.chapter}:</div>
                <div className="truncate">{chapter.attributes.title}</div>
                <div className="h-fit rounded-full bg-slate-200 px-1.5 text-xs dark:bg-slate-700 ">
                  {chapter.attributes.translatedLanguage}
                </div>
              </div>
              <time className="ml-1 inline-flex min-w-fit items-center gap-1 text-xs xl:text-sm">
                <FaRegClock />{" "}
                {new Date(chapter.attributes.readableAt).toLocaleDateString(
                  "en-GB"
                )}
              </time>
            </Link>
          )) || "N/A"}
      </div>
    </div>
  );
}
function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  return (
    <div className="flex justify-center">
      <button className="aspect-square rounded bg-slate-200 px-2 text-sm font-medium">
        <FaChevronLeft />
      </button>
      <Link
        to={`?page=` + setCurrentPage(currentPage + 1)}
        className="aspect-square rounded bg-slate-200 px-2 text-sm font-medium"
      >
        <FaChevronRight />
      </Link>
    </div>
  );
}
function Manga() {
  const [manga, setManga] = useState(null);
  const [chapters, setChapters] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const id = useLocation().pathname.split("/")[2];
  const [page, setPage] = useState(0);
  console.log(page);
  useEffect(() => {
    request
      .get("/manga/" + id, {
        params: {
          includes: ["cover_art", "author", "artist"],
        },
        paramsSerializer: (params) => {
          return qs.stringify(params);
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        setManga(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  useEffect(() => {
    request
      .get("chapter", {
        params: {
          manga: id,
          limit: 96,
          order: {
            chapter: "desc",
          },

        },
        paramsSerializer: (params) => {
          return qs.stringify(params);
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        setChapters(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  let img;
  let author;
  let artist;
  let title = manga?.attributes?.title.en;
  let description = manga?.attributes?.description.en;
  let year = manga?.attributes?.year;
  let status = manga?.attributes?.status;
  let tags = manga?.attributes?.tags;

  manga?.relationships?.map((element) => {
    if (element.type === "cover_art") {
      img = `https://uploads.mangadex.org/covers/${manga?.id}/${element.attributes.fileName}.256.jpg`;
    } else if (element.type === "author") {
      author = element.attributes.name;
    } else if (element.type === "artist") {
      artist = element.attributes.name;
    }
  });
  return (
    <main className="relative">
      <Banner url={img} />
      <section className="mt-2 grid grid-cols-1  justify-items-center gap-3 sm:grid-cols-4 xl:grid-cols-5 xl:gap-x-4">
        <MangaCover url={img} />
        <div className="sm:col-start-1">
          <MangaStats size={"16px"} rating={4.2} save={2121} view={3423} />
        </div>
        <MangaInfo
          title={title}
          author={author}
          artist={artist}
          year={year}
          status={status}
        />
        <Tag tags={tags} />
        <Buttons id={id} />
        <Description text={description} />
        <ChapterList chapters={chapters} />
        {/* <Pagination currentPage={currentPage} /> */}
      </section>
    </main>
  );
}

export default Manga;
