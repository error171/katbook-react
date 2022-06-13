import React from "react"; // import "./Manga.css";

import { MangaStats } from "../../components/PopularManga";

function Banner(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "banner",
    className: "absolute top-0 left-0 w-full overflow-hidden -z-10 banner-container brightness-[0.60] h-64 sm:h-80"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inset-0 w-full h-full bg-fixed bg-center bg-no-repeat bg-cover blur-lg -z-10",
    style: {
      backgroundImage: `url(${props.url})`
    }
  }));
}

function MangaCover(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full h-auto overflow-hidden rounded-md aspect-[5/7]"
  }, /*#__PURE__*/React.createElement("img", {
    className: "object-cover object-center w-full h-full",
    src: props.url
  }));
}

function MangaInfo(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "col-span-2 sm:h-52 sm:grid sm:justify-items-start sm:col-span-2 lg:col-span-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("h1", {
    "aria-label": "Title",
    className: "text-xl font-bold text-slate-100 title sm:text-4xl xl:text-5xl sm:text-white"
  }, props.title), /*#__PURE__*/React.createElement("h2", {
    "aria-label": "Alternative Title",
    className: "sm:text-xl xl:text-2xl sm:text-white/90 "
  }, props.altTitle)), /*#__PURE__*/React.createElement("div", {
    id: "author",
    className: "self-center sm:text-white sm:text-lg"
  }, props.author), /*#__PURE__*/React.createElement(MangaStats, {
    status: "ongoing"
  }));
}

function Manga() {
  return /*#__PURE__*/React.createElement("main", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Banner, {
    url: "https://api.lorem.space/image/movie?w=500&hash=3dwnfq7k"
  }), /*#__PURE__*/React.createElement("section", {
    className: "grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-3"
  }, /*#__PURE__*/React.createElement(MangaCover, {
    url: "https://api.lorem.space/image/movie?w=500&hash=3dwnfq7k"
  }), /*#__PURE__*/React.createElement(MangaInfo, {
    title: "Lorem ipsum dolor sitamet. Quisqu natus!",
    altTitle: "onsectetur adipisicing elit. Quisquam, natus!",
    author: "1Ak wdMA"
  }))));
}

export default Manga;