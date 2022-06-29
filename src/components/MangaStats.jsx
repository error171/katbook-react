import axios from "axios";
import React, { useState, useEffect } from "react";
import { HiOutlineBookmark, HiOutlineEye } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi";

export function MangaStats(props) {
  function abbreviateNumber(value) {
    let newValue = value;
    const suffixes = ["", "K", "M", "B", "T"];
    let suffixNum = 0;
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum++;
    }

    newValue = newValue.toString().length > 2 ? newValue.toPrecision(3) : newValue.toPrecision();

    newValue += suffixes[suffixNum];
    return newValue;
  }
  
  return (
    <div
      style={{ fontSize: props.size }}
      className="flex items-center gap-2 tracking-tight  dark:text-slate-400  md:gap-3 "
    >
      {/* rating */}
      {/* <div className="flex items-center gap-0.5 text-amber-500">
        <HiOutlineStar className="" size={16} />{" "}
        <span>{stats.rating.bayesian.toFixed(2) || "N/A"}</span>
      </div> */}
      {/* follow  */}
      {/* <div className="flex items-center gap-0.5">
        <HiOutlineBookmark className="" size={16} />{" "}
        <span>{abbreviateNumber(stats.follows) || "N/A"}</span>
      </div> */}
      {/* <div className="flex items-center gap-0.5">
        <HiOutlineEye className="" size={16} />{" "}
        <span>{props.view || "N/A"}</span>
      </div> */}
    </div>
  );
}
