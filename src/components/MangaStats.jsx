import React from "react";
import { HiOutlineBookmark, HiOutlineEye } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi";

export function MangaStats(props) {
  return (
    <div style={{fontSize: props.size}} className="flex tracking-tight items-center gap-2  text-slate-400  md:gap-3 sm:text-sm">
      <div className="flex items-center gap-0.5 text-amber-500">
        <HiOutlineStar className="" size={16} />{" "}
        <span>{props.rating || "N/A"}</span>
      </div>
      <div className="flex items-center gap-0.5">
        <HiOutlineBookmark className="" size={16} />{" "}
        <span>{props.save || "N/A"}</span>
      </div>
      <div className="flex items-center gap-0.5">
        <HiOutlineEye className="" size={16} />{" "}
        <span>{props.view || "N/A"}</span>
      </div>
    </div>
  );
}
