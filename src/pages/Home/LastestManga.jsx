import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { request } from "../../api/axios";
import qs from "qs";
import { Link } from "react-router-dom";

function MangaCard(props) {
  let img = "";
  props.relationships.map((element) =>
    element.type === "cover_art" ? (img = element.attributes.fileName) : null
  );
  return (
    <Link to={`/manga/${props.id}`} >
      <div className="relative aspect-[3/4] overflow-hidden rounded">
        
          <img className="h-full w-full object-cover" src={`https://uploads.mangadex.org/covers/${props.id}/${img}.256.jpg`} alt="" />
        
      </div>
      <h1 className="mt-1 leading-tight line-clamp-2">
      {Object.values(props.attributes.title)[0]}
      </h1>
    </Link>
  );
}
function LastestManga() {
  const [manga, setManga] = useState(null);
  useEffect(() => {
    request
      .get("/manga/", {
        params: {
          limit: 24,
          includes: ["cover_art","manga"],
          order: { latestUploadedChapter: "desc",},
          contentRating: ['safe','suggestive']
        },
        paramsSerializer: (params) => {
          return qs.stringify(params);
        },
      })
      .then((res) => {
        console.log(res.data.data);
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
      <div className="inline-grid w-auto grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 ">
        {manga?.map((item, index) => (
          <MangaCard key={index} {...item} />
        ))}
      </div>
    </>
  );
}

export default LastestManga;
