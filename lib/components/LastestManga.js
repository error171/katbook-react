import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Manga, login } from "mangadex-full-api"; // TypeScript Example:

import MFA from "mangadex-full-api"; // You can also import directly like:
// import { Manga, login } from 'mangadex-full-api';

const username = "Demond_Corkery";
const password = "hC7wQ7DAnFvFMXa";

function Card(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative rounded overflow-hidden aspect-[3/4]"
  }, props.url ? /*#__PURE__*/React.createElement("img", {
    className: "object-cover w-full h-full",
    src: props.url,
    alt: ""
  }) : /*#__PURE__*/React.createElement(Skeleton, {
    height: "100%"
  })), /*#__PURE__*/React.createElement("h1", {
    className: "mt-1 font-semibold leading-tight line-clamp-2"
  }, props.title || /*#__PURE__*/React.createElement(Skeleton, {
    count: 2
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-slate-300"
  }, props.lastChapter ? "Chapter " + props.lastChapter : /*#__PURE__*/React.createElement(Skeleton, {
    count: 1,
    width: "50%"
  })));
}

function LastestManga() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SkeletonTheme, {
    baseColor: "#475569",
    highlightColor: "#64748b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "z-10 py-3 text-2xl font-medium md:text-3xl"
  }, "Latest Updates"), /*#__PURE__*/React.createElement("div", {
    className: "inline-grid w-auto grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 "
  }, /*#__PURE__*/React.createElement(Card, {
    url: "https://api.lorem.space/image/movie?w=300&hash=a6xlkwed",
    lastChapter: "2",
    title: "Lorem ipsum dolor sit amet consect adipisicing."
  }), /*#__PURE__*/React.createElement(Card, null), /*#__PURE__*/React.createElement(Card, null), /*#__PURE__*/React.createElement(Card, null), /*#__PURE__*/React.createElement(Card, null), /*#__PURE__*/React.createElement(Card, null), /*#__PURE__*/React.createElement(Card, null))));
}

export default LastestManga;