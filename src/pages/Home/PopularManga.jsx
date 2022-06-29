import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import { useState, useEffect } from "react";
import { MangaStats } from "../../components/MangaStats";
import qs from "qs";
import {request} from "../../api/axios";
function Card(props) {
  let img = "";
  props.relationships.map((element) =>
    element.type === "cover_art" ? (img = element.attributes.fileName) : null
  );
  return (
    <a
      href={`/manga/${props.id}`}
      className="grid aspect-[1.618] w-full max-w-sm grid-cols-3 overflow-hidden rounded-md bg-slate-200/80 shadow-lg dark:bg-slate-800 md:rounded-lg"
    >
      <div className="relative">
        <img
          src={`https://uploads.mangadex.org/covers/${props.id}/${img}.256.jpg`}
          className="absolute inset-0 h-full w-full object-cover"
          alt="manga cover"
        />
      </div>
      <div className="col-span-2 space-y-2 p-3">
        <h1 className="overflow-hidden font-semibold tracking-wide line-clamp-2 md:text-lg md:leading-6">
          {Object.values(props.attributes.title)[0]}
        </h1>
        <MangaStats size={{ fontSize: "0.8rem" }} />

        <div className="flex flex-wrap gap-2 pt-2">
          <Tag tags={props.attributes.tags} />
        </div>
      </div>
    </a>
  );
}
function Tag(props) {
  return (
    <div className="flex flex-wrap gap-1 ">
      {props.tags?.slice(0, 5).map((item, index) => (
        <span
          className="rounded bg-slate-300/70 px-1.5 text-xs font-semibold  text-slate-600  dark:bg-slate-700/80 dark:text-slate-300 lg:text-sm"
          key={index}
        >
          {item.attributes.name.en}
        </span>
      ))}
    </div>
  );
}

function PopularManga() {
  const [manga, setManga] = useState(null);
  useEffect(() => {
    request
      .get("/manga/", {
        params: {
          limit: 30,
          includes: ["cover_art"],
          order: { followedCount: "desc"},
        },
        paramsSerializer: (params) => {
          return qs.stringify(params);
        },
      })
      .then((res) => {
        setManga(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(request.PopularManga)
  }, []);

  return (
    <>
      <div className="relative inline-block text-2xl  font-medium md:text-3xl ">
        Popular
      </div>
      <Swiper
        className="relative min-h-[228px] pt-5 pb-10"
        modules={[Pagination, Autoplay, Navigation]}
        autoHeight={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        grabCursor={true}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 2.5,
            spaceBetween: 32,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          2560: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {manga?.map((item, index) => (
          <SwiperSlide key={index}>
            <Card {...item} />
          </SwiperSlide>
        ))}
        <div className="hidden md:block">
          <div className="swiper-pagination"></div>
        </div>
        <div className="swiper-button-next hidden -translate-y-3 scale-90 rounded-full bg-black/80 p-8 text-white opacity-60 hover:opacity-90 lg:flex"></div>
        <div className="swiper-button-prev hidden -translate-y-3 scale-90 rounded-full bg-black/80 p-8 text-white opacity-60 hover:opacity-90 lg:flex"></div>
      </Swiper>
    </>
  );
}

export default PopularManga;
export { MangaStats, Card, Tag };
