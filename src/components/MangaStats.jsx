import React from "react";
import Skeleton from "react-loading-skeleton";
import { HiOutlineBookmark } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi";

export function MangaStats(props) {
  return (
    <div style={props.size} className="flex tracking-tight items-center gap-2  text-slate-400  md:gap-3 md:text-sm">
      <div className="flex items-center gap-0.5 text-amber-500">
        <HiOutlineStar className="" size={16} />{" "}
        <span>{props.rating || "N/A"}</span>
      </div>
      <div className="flex items-center gap-0.5">
        <HiOutlineBookmark className="" size={16} />{" "}
        <span>{props.save || "N/A"}</span>
      </div>
      <div className="font-medium">
        {props.status === "ongoing" ? (
          <span className="text-blue-500">Ongoing</span>
        ) : props.status === "completed" ? (
          <span className="text-green-500 ">Completed</span>
        ) : props.status === "cancelled" ? (
          <span className="text-red-500 ">Cancelled</span>
        ) : (
          <Skeleton count={1} />
        )}
      </div>
    </div>
  );
}
