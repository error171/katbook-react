import React from "react";
import { HiHome } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaRandom } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
function Sidebar() {
  const linkClass =
    "flex items-center gap-2 hover:bg-slate-700 rounded-xl transition-all ease-in px-4 py-2";
  const linkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#34d399" : "",
      color: isActive ? "#1e293b" : "",
      fontWeight: isActive ? "bold" : "",
    };
  };
  return (
    <aside
      className="sidebar fixed top-0 z-10 hidden h-screen w-64 bg-slate-800/70 shadow-2xl shadow-slate-900 lg:block"
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto p-4 text-slate-400">
        <Link className="block p-4" to="/">
          <span className="bg-gradient-to-r from-emerald-400 to-indigo-500 bg-clip-text text-3xl font-bold text-transparent lg:text-3xl">
            Katbook
          </span>
        </Link>
        {/* <div className="mx-4 mt-2 text-sm font-bold">MENU</div> */}
        <div className="space-y-2 font-medium tracking-wide text-slate-300">
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
          <NavLink style={linkStyles} className={linkClass} to="/random">
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
  );
}

export default Sidebar;
