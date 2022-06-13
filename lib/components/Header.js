import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";
import Sidebar from "./Sidebar";

function Header() {
  function openSidebar() {
    document.querySelector(".sidebar").classList.toggle("hidden");
  }

  return /*#__PURE__*/React.createElement("header", {
    className: "fixed inset-x-0 z-10 lg:ml-64 bg-slate-900/90 backdrop-blur-lg text-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between h-16 gap-8 px-2 mx-auto sm:px-4 lg:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("button", {
    className: "block p-2.5 transition rounded lg:hidden"
  }, /*#__PURE__*/React.createElement(HiMenuAlt2, {
    className: "w-7 h-7"
  })), /*#__PURE__*/React.createElement("a", {
    className: "block lg:hidden",
    href: "/"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl antialiased font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500"
  }, "Katbook"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sm:gap-4 sm:flex"
  }, /*#__PURE__*/React.createElement("form", {
    action: "search",
    className: "hidden mb-0 md:flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("input", {
    className: "h-10 pr-10 text-sm rounded-full placeholder-slate-300 bg-slate-700 focus:z-10",
    placeholder: "Search...",
    type: "text",
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    className: "absolute inset-y-0 right-0 p-2 mr-px rounded-r-lg text-slate-300",
    type: "submit"
  }, /*#__PURE__*/React.createElement(HiSearch, {
    className: "w-5 h-5"
  }))))), /*#__PURE__*/React.createElement("button", {
    className: "md:hidden",
    type: "submit"
  }, /*#__PURE__*/React.createElement(HiSearch, {
    size: 24
  })), /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement(HiUserCircle, {
    className: "text-slate-400",
    size: 36
  })))));
}

export default Header;