import React from "react";
import { useState } from "react";
import LastestManga from "../components/LastestManga";
import PopularManga from "../components/PopularManga";

function Home() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-0 right-0 w-1/2 rounded-tl-full blur-[80px] -z-10 opacity-40 bg-gradient-to-br from-emerald-500 to-violet-500 h-1/2"
  }), /*#__PURE__*/React.createElement("main", {
    className: ""
  }, /*#__PURE__*/React.createElement(PopularManga, null), /*#__PURE__*/React.createElement(LastestManga, null)));
}

export default Home;