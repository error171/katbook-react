import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";
import Sidebar from "./Sidebar";
function Header() {
  function openSidebar() {
    document.querySelector(".sidebar").classList.toggle("hidden");
  }
  return (
    <header className="fixed border-b lg:border-0 border-emerald-500 inset-x-0 z-10 lg:ml-64 bg-slate-900 text-slate-200 shadow">
      <div className="flex items-center justify-between h-16 gap-8 px-2 mx-auto sm:px-4 lg:px-12">
        <div className="flex items-center">
          <button className="block p-2.5 transition rounded lg:hidden">
            {/* <span className="sr-only">Toggle menu</span> */}
            <HiMenuAlt2 className="w-7 h-7" />
          </button>
          <a className="block lg:hidden" href="/">
            <h1 className="text-2xl antialiased font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500">
              Katbook
            </h1>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="sm:gap-4 sm:flex">
            <form className="hidden mb-0 md:flex">
              <div className="relative">
                <input
                  className="h-10 pr-10 border-0 text-sm rounded-full placeholder-slate-300 bg-slate-800 focus:z-10"
                  placeholder="Search..."
                  type="text"
                  required
                />

                <button
                  className="absolute inset-y-0 right-0 p-2 mr-px rounded-r-lg text-slate-300"
                  type="submit"
                >
                  <HiSearch className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
          <button className="md:hidden" type="submit">
            <HiSearch size={24} />
          </button>
          <button>
            <HiUserCircle className="text-slate-300 h-full w-8 lg:w-10"/>
          </button>
          {/* <input type="checkbox" name="" id="checkbox" className="hidden peer"/>
          <label htmlFor="checkbox">
            <div className="w-6 h-[3px] rounded-full peer-checked:rotate-45 scale-90 bg-slate-300"></div>
            <div className="w-6 h-[3px] scale-90 peer-checked:-rotate-45 rounded-full mt-[6px] bg-slate-300"></div>         
          </label> */}
        </div>
      </div>
    </header>
  );
}
export default Header;
