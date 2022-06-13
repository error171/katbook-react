import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import "swiper/css/pagination";
import { HiOutlineBookmark } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import { Manga, login } from "mangadex-full-api"; // import MFA from "mangadex-full-api";

const MFA = require('mangadex-full-api');

const username = "Demond_Corkery";
const password = "hC7wQ7DAnFvFMXa";
MFA.login(username, password).then(async () => {
  const query = "Ancient Magus Bride";
  const list = await MFA.Manga.search({
    title: query,
    limit: 5
  });
  console.log(list.length, "results for", query);
  console.log("The first result was written by", (await list[0].authors[0].resolve()).name);
});

function MangaStats(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 text-xs md:text-sm md:gap-3 text-slate-400"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 text-orange-500"
  }, /*#__PURE__*/React.createElement(HiOutlineStar, {
    className: "",
    size: 16
  }), " ", /*#__PURE__*/React.createElement("span", null, props.rating || "N/A")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/React.createElement(HiOutlineBookmark, {
    className: "",
    size: 16
  }), " ", /*#__PURE__*/React.createElement("span", null, props.save || "N/A")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs md:text-sm"
  }, props.status === "ongoing" ? /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-1 text-blue-400 rounded-md bg-slate-900"
  }, "Ongoing") : props.status === "completed" ? /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-1 text-green-500 rounded-md bg-slate-900"
  }, "Completed") : props.status === "cancelled" ? /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-1 text-red-500 rounded-md bg-slate-900"
  }, "Cancelled") : /*#__PURE__*/React.createElement(Skeleton, {
    count: 1
  })));
}

function Card(props) {
  return /*#__PURE__*/React.createElement(SkeletonTheme, {
    baseColor: "#334155",
    highlightColor: "#475569"
  }, /*#__PURE__*/React.createElement("a", {
    href: props.url || "#",
    className: " inline-grid w-full aspect-[1.618] max-w-sm grid-cols-3 overflow-hidden rounded-md md:rounded-lg shadow-md bg-slate-800/80"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative "
  }, /*#__PURE__*/React.createElement("img", {
    src: props.img,
    className: "absolute inset-0 object-cover w-full h-full",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-span-2 px-3 py-2 space-y-2 md:py-2 md:px-3"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "overflow-hidden font-bold leading-tight tracking-wide md:text-lg line-clamp-2"
  }, props.title || /*#__PURE__*/React.createElement(Skeleton, {
    count: 2
  })), /*#__PURE__*/React.createElement(MangaStats, null), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 pt-2"
  }, /*#__PURE__*/React.createElement(Tag, {
    name: "Action"
  }), /*#__PURE__*/React.createElement(Tag, {
    name: "Comedy"
  }), /*#__PURE__*/React.createElement(Tag, {
    name: "Sport"
  }), /*#__PURE__*/React.createElement(Tag, {
    name: "Pswqwqww"
  }), /*#__PURE__*/React.createElement(Tag, {
    name: "Sport"
  })))));
}

function Tag(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "px-2 text-xs font-semibold rounded md:text-sm text-slate-300 bg-slate-700/80"
  }, props.name);
}

function PopularManga() {
  const [manga, setManga] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://api.mangadex.org/";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-medium md:text-3xl "
  }, "Popular"), /*#__PURE__*/React.createElement(Swiper, {
    modules: [Pagination, Autoplay],
    autoHeight: true // autoplay={{
    //   delay: 2500,
    //   disableOnInteraction: false,
    // }}
    // onSlideChange={() => console.log("slide change")}
    // onSwiper={(swiper) => console.log(swiper)}
    ,
    pagination: {
      clickable: true
    },
    grabCursor: true,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1280: {
        slidesPerView: 2.5,
        spaceBetween: 32
      },
      1440: {
        slidesPerView: 3.5,
        spaceBetween: 40
      },
      2560: {
        slidesPerView: 4.5,
        spaceBetween: 40
      }
    },
    className: "relative pt-3 pb-8"
  }, /*#__PURE__*/React.createElement(SwiperSlide, null, /*#__PURE__*/React.createElement(Card, {
    img: "https://api.lorem.space/image/movie?w=300&hash=cmb2kk6n",
    title: "Lrem dasa iiw ond  wqm awqoeuy  asdasdasdn",
    status: "ongoing",
    rating: "4.2",
    save: "123"
  })), /*#__PURE__*/React.createElement(SwiperSlide, null, /*#__PURE__*/React.createElement(Card, {
    status: "completed",
    img: "https://api.lorem.space/image/movie?w=300&hash=aosqvvvl"
  })), /*#__PURE__*/React.createElement(SwiperSlide, null, /*#__PURE__*/React.createElement(Card, {
    status: "cancelled"
  })), /*#__PURE__*/React.createElement(SwiperSlide, null, /*#__PURE__*/React.createElement(Card, null)), /*#__PURE__*/React.createElement(SwiperSlide, null, /*#__PURE__*/React.createElement(Card, null))));
}

export default PopularManga;
export { MangaStats, Card, Tag };