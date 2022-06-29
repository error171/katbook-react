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
  const linkClass =
    "flex items-center w-full gap-2 dark:hover:bg-slate-700 hover:bg-slate-300 rounded-lg transition-all ease-linear px-4 py-2";
  const linkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#34d399" : "",
      color: isActive ? "#1e293b" : "",
    };
  };
  const asideClass =
    "sidebar fixed top-0 z-20 transition-all duration-200 -left-full h-screen w-64 bg-slate-100 dark:bg-slate-800 shadow-xl lg:left-0 lg:flex";
  return (
    <>
      {sidebar ? (
        <div
          className="fixed inset-0 z-20 bg-slate-700/50 transition duration-200 ease-in-out lg:hidden"
          onClick={toggleSidebar}
        ></div>
      ) : null}
      {/* Sidebar */}
      <aside
        className={sidebar ? asideClass + " left-0" : asideClass}
        aria-label="Sidebar"
      >
        <div className="w-full overflow-y-auto p-4">
          <Link className="block p-4" to="/">
            <span className="bg-gradient-to-r from-emerald-400 to-indigo-500 bg-clip-text text-2xl font-bold text-transparent lg:text-3xl">
              Catbook
            </span>
          </Link>
          {/* <div className="mx-4 mt-2 text-sm font-bold">MENU</div> */}
          <div className="space-y-2 font-medium tracking-wide">
            <NavLink style={linkStyles} className={linkClass} to="/">
              <HiHome size={20} />
              Home
            </NavLink>
            <NavLink style={linkStyles} className={linkClass} to="/popular">
              <FaStar size={20} />
              Popular
            </NavLink>
            <NavLink style={linkStyles} className={linkClass} to="/trending">
              <FaFireAlt size={20} />
              Trending
            </NavLink>
            <NavLink style={linkStyles} className={linkClass} to="/lastest">
              <FaBolt size={20} />
              Latest Updates
            </NavLink>
            <NavLink
              style={linkStyles}
              className={linkClass}
              to="/manga/random"
            >
              <FaRandom size={20} />
              Random
            </NavLink>
            <NavLink style={linkStyles} className={linkClass} to="/categories">
              <FaListUl size={20} />
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
      <header className="fixed inset-x-0 z-10 bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-300 lg:ml-64">
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
            <div className="sm:flex md:gap-4">
              <form className="mb-0 hidden md:flex">
                <div className="relative">
                  <input
                    className="h-10 rounded-full border-slate-300 bg-slate-200/90 pr-10 text-sm focus:z-10 dark:border-slate-700 dark:bg-slate-800 dark:placeholder-slate-300"
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
            </div>
            <button className="p-2 md:hidden" type="submit">
              <HiSearch size={24} />
            </button>
            {/* <button className="p-2 ">
  <HiUserCircle className="h-full w-8" />
</button> */}
            <ThemeToggle />
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
