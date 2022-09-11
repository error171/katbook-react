import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { request } from "../../api/axios";
import qs from "qs";
import { Link } from "react-router-dom";

function MangaCard(props) {
  let img = null;
  props.relationships.map(
    (element) =>
      element.type === "cover_art" && (img = element.attributes.fileName)
  );
  return (
    <Link to={`/manga/${props.id}`}>
      <div className="relative aspect-[5/7] overflow-hidden rounded">
        <img
          className="h-full w-full object-cover"
          src={`https://uploads.mangadex.org/covers/${props.id}/${img}.256.jpg`}
          alt=""
        />
      </div>
      <h1 className="mt-1 leading-tight line-clamp-2">
        {Object.values(props.attributes.title)[0]}
      </h1>
    </Link>
  );
}
function LastestManga() {
  const [manga, setManga] = useState(null);
  const [index, setIndex] = useState(36);
  useEffect(() => {
    request
      .get("/manga", {
        params: {
          limit: index,
          includes: ["cover_art"],
          order: { latestUploadedChapter: "desc" },
          contentRating: ["safe"],
        },
        paramsSerializer: (params) => {
          return qs.stringify(params);
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        setManga(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="z-10 py-3 text-2xl font-medium md:text-3xl">
        Latest Updates
      </div>
      <div className="inline-grid w-auto grid-cols-2 gap-6 sm:grid-cols-4 xl:grid-cols-6 ">
        {manga?.map((item, index) => (
          <MangaCard key={index} {...item} />
        ))}
      </div>
    </>
  );
}

export default LastestManga;
