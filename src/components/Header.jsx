import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import ThemeToggle from "./ThemeProvider/ThemeToggle";
import { useState } from "react";
import { HiHome } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaRandom } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
function Header() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  const linkClass = ({ isActive }) =>
    `flex tracking-wide font-semibold items-center w-full gap-2 rounded-lg duration-150 ease-linear px-4 py-2 ${
      isActive &&
      "bg-emerald-400 dark:bg-emerald-500 dark:text-slate-800 shadow-lg dark:shadow-emerald-800 shadow-emerald-200"
    }`;
  return (
    <>
      {
        //Overlay for sidebar
        sidebar && (
          <div
            className="fixed inset-0 z-20 bg-slate-700/50  transition duration-200 ease-in-out lg:hidden"
            onClick={toggleSidebar}
          ></div>
        )
      }
      {/* Sidebar */}
      <aside
        className={`sidebar fixed top-0 z-20 transition-all duration-200 ${
          sidebar ? "left-0" : "-left-full"
        } h-screen w-64 bg-slate-100 shadow-xl dark:bg-slate-800 lg:left-0 lg:flex`}
        aria-label="Sidebar"
      >
        <div className="w-full overflow-y-auto p-4">
          <Link className="block p-4" to="/">
            <span className="bg-gradient-to-r  from-emerald-400 to-indigo-500 bg-clip-text text-2xl font-bold text-transparent lg:text-3xl">
              Catbook
            </span>
          </Link>
          {/* <div className="mx-4 mt-2 text-sm font-bold">MENU</div> */}
          <div className="space-y-2 font-medium  tracking-wide">
            <NavLink className={linkClass} to="/">
              <HiHome size={18} />
              Home
            </NavLink>
            <NavLink className={linkClass} to="/popular">
              <FaStar size={18} />
              Popular
            </NavLink>
            <NavLink className={linkClass} to="/trending">
              <FaFireAlt size={18} />
              Trending
            </NavLink>
            <NavLink className={linkClass} to="/lastest">
              <FaBolt size={18} />
              Latest Updates
            </NavLink>
            <NavLink className={linkClass} to="/manga/random" reloadDocument>
              <FaRandom size={18} />
              Random
            </NavLink>
            <NavLink className={linkClass} to="/categories">
              <FaListUl size={18} />
              Categories
            </NavLink>
          </div>
        </div>
      </aside>
      {Header()}
    </>
  );

  function Header() {
    return (
      <header className="fixed inset-x-0 z-10 bg-slate-50/80 text-slate-600  backdrop-blur-lg dark:bg-slate-900/80 dark:text-slate-300 lg:ml-64">
        <div className="mx-auto flex h-16 items-center justify-between gap-8 px-2 sm:px-4 lg:px-12">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="block rounded p-2.5 transition lg:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <HiMenuAlt2 className="h-7 w-7" />
            </button>
            <a className="block lg:hidden" href="/">
              <h1 className="bg-gradient-to-r from-emerald-500 to-indigo-500 bg-clip-text text-2xl font-bold text-transparent antialiased md:text-3xl">
                Catbook
              </h1>
            </a>
          </div>

          <div className="flex items-center gap-1 md:gap-4">
            <div className="sm:flex md:gap-4">{SearchBar()}</div>
            <button className="p-2 md:hidden" type="submit">
              <HiSearch size={24} />
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>
    );

    function SearchBar() {
      return (
        <form className="mb-0 hidden md:flex">
          <div className="relative">
            <input
              className="h-10 rounded-full border-slate-300 bg-slate-200/90 pr-10 text-sm focus:z-10  dark:border-slate-700 dark:bg-slate-800 dark:placeholder-slate-400"
              placeholder="Search..."
              type="text"
              required
            />

            <button
              className="absolute inset-y-0 right-0 mr-px rounded-r-lg p-2 "
              type="submit"
            >
              <HiSearch className="h-5 w-5" />
            </button>
          </div>
        </form>
      );
    }
  }
}
export default Header;
