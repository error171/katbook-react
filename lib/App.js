import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chapter from "./pages/Chapter";
import Manga from "./pages/Manga/Manga";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Sidebar from "./components/Sidebar";

function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Sidebar, null), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/manga",
    element: /*#__PURE__*/React.createElement(Manga, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/chapter/:id",
    element: /*#__PURE__*/React.createElement(Chapter, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/search/:query",
    element: /*#__PURE__*/React.createElement(Search, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "*",
    element: /*#__PURE__*/React.createElement(Home, null)
  })), /*#__PURE__*/React.createElement(Footer, null));
}

export default App;