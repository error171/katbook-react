import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeProvider/ThemeToggle";
function Header() {
  function openSidebar() {
    document.querySelector(".sidebar").classList.toggle("hidden");
  }
  return (
    <header className="fixed  inset-x-0 z-10 bg-slate-50/90  text-slate-600 backdrop-blur-lg dark:bg-slate-900/90 dark:text-slate-300 lg:ml-64">
      <div className="mx-auto flex h-16 items-center justify-between gap-8 px-2 sm:px-4 lg:px-12">
        <div className="flex items-center">
          <button className="block rounded p-2.5 transition lg:hidden">
            <span className="sr-only">Toggle menu</span>
            <HiMenuAlt2 className="h-7 w-7" />
          </button>
          {/* <input type="checkbox" name="" id="checkbox" className="hidden" />
          <label htmlFor="checkbox" className="px-3 lg:hidden">
            <div className="h-[3px] w-6 scale-90 rounded-full bg-slate-300"></div>
            <div className="mt-[6px] h-[3px] w-6 scale-90 rounded-full bg-slate-300"></div>
          </label> */}
          <a className="block lg:hidden" href="/">
            <h1 className="bg-gradient-to-r from-emerald-500 to-indigo-500 bg-clip-text text-2xl font-bold text-transparent antialiased md:text-3xl">
              Katbook
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
export default Header;
