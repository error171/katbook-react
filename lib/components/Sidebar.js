import React from "react";
import { HiHome } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaRandom } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass = "flex items-center gap-2 hover:bg-slate-700 rounded-xl transition-all ease-in px-4 py-2";

  const linkStyles = ({
    isActive
  }) => {
    return {
      backgroundColor: isActive ? "#34d399" : "",
      color: isActive ? "#1e293b" : "",
      fontWeight: isActive ? "bold" : ""
    };
  };

  return /*#__PURE__*/React.createElement("aside", {
    className: "fixed top-0 z-10 hidden w-64 h-screen shadow-2xl shadow-slate-900 sidebar lg:block bg-slate-800/70",
    "aria-label": "Sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 overflow-y-auto text-slate-400"
  }, /*#__PURE__*/React.createElement(Link, {
    className: "block p-4",
    to: "/"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl font-bold text-transparent lg:text-3xl bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-500"
  }, "Katbook")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 font-medium tracking-wide text-slate-300"
  }, /*#__PURE__*/React.createElement(NavLink, {
    style: linkStyles,
    className: linkClass,
    to: "/"
  }, /*#__PURE__*/React.createElement(HiHome, {
    size: 20
  }), "Home"), /*#__PURE__*/React.createElement(NavLink, {
    style: linkStyles,
    className: linkClass,
    to: "/popular"
  }, /*#__PURE__*/React.createElement(FaStar, {
    size: 20
  }), "Popular"), /*#__PURE__*/React.createElement(NavLink, {
    style: linkStyles,
    className: linkClass,
    to: "/trending"
  }, /*#__PURE__*/React.createElement(FaFireAlt, {
    size: 20
  }), "Trending"), /*#__PURE__*/React.createElement(NavLink, {
    style: linkStyles,
    className: linkClass,
    to: "/lastest"
  }, /*#__PURE__*/React.createElement(FaBolt, {
    size: 20
  }), "Latest Updates"), /*#__PURE__*/React.createElement(NavLink, {
    style: linkStyles,
    className: linkClass,
    to: "/random"
  }, /*#__PURE__*/React.createElement(FaRandom, {
    size: 20
  }), "Random"), /*#__PURE__*/React.createElement(NavLink, {
    style: linkStyles,
    className: linkClass,
    to: "/categories"
  }, /*#__PURE__*/React.createElement(FaListUl, {
    size: 20
  }), "Categories"))));
}

export default Sidebar;