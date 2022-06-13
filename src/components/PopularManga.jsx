import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import { useState } from "react";

import { Manga, login } from "mangadex-full-api";
import MFA from "mangadex-full-api";
import { MangaStats } from "./MangaStats";
// const MFA = require('mangadex-full-api');
const username = "Demond_Corkery";
const password = "hC7wQ7DAnFvFMXa";
MFA.login(username, password).then(async () => {
  const query = "Ancient Magus Bride";
  const list = await MFA.Manga.search({ title: query, limit: 5 });
  console.log(list.length, "results for", query);
  console.log(
    "The first result was written by",
    (await list[0].authors[0].resolve()).name
  );
});
function Card(props) {
  return (
    <SkeletonTheme baseColor="#334155" highlightColor="#475569">
      <a
        href={props.url || "#"}
        className=" inline-grid aspect-[1.618] w-full max-w-sm grid-cols-3 overflow-hidden rounded-md bg-slate-800/80 shadow-md md:rounded-lg"
      >
        <div className="relative ">
          <img
            src={props.img}
            className="absolute inset-0 h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="col-span-2 space-y-2 px-3 py-2 md:py-2 md:px-3">
          <h1 className="overflow-hidden font-semibold leading-tight tracking-wide line-clamp-2 md:text-lg">
            {props.title || <Skeleton count={2} />}
          </h1>
          <MangaStats
            rating={props.rating}
            save={props.save}
            status={props.status}
            size={{fontSize: '0.8rem'}}
          />
          <div className="flex flex-wrap gap-2 pt-2">
            <Tag name="Action" />
            <Tag name="Comedy" />
            <Tag name="Sport" />
            <Tag name="Pswqwqww" />
            <Tag name="Sport" />
          </div>
        </div>
      </a>
    </SkeletonTheme>
  );
}
function Tag(props) {
  return (
    <div className="rounded bg-slate-700/80 px-2 text-xs font-semibold text-slate-300 md:text-sm">
      {props.name}
    </div>
  );
}

function PopularManga() {
  const [manga, setManga] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://api.mangadex.org/";

  return (
    <>
      <div className="text-2xl font-medium md:text-3xl ">Popular</div>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoHeight={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
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
            slidesPerView: 2,
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
        className="relative pt-3 pb-8"
      >
        <SwiperSlide>
          <Card
            img="https://api.lorem.space/image/movie?w=300&hash=cmb2kk6n"
            title="Lrem dasa iiw ond  wqm awqoeuy  asdasdasdn"
            status="ongoing"
            rating="4.2"
            save="123"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            status="completed"
            img="https://api.lorem.space/image/movie?w=300&hash=aosqvvvl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card status="cancelled" />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default PopularManga;
export { MangaStats, Card, Tag };
