import React from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

function ChapterInfo(props) {
  return (
    <div className=" prose text-center dark:prose-invert prose-headings:m-0 prose-p:leading-6 prose-headings:leading-6">
      <h3 className=""> {props.mangaTitle || <Skeleton />}</h3>
      <p className="">
        {`Chapter ${props.Chapter}: ${props.chapterTitle}` || <Skeleton />}
      </p>
    </div>
  );
}
function Chapter() {
  return (
    <main>
      <section>
        <ChapterInfo mangaTitle='Lorem ipsum dolor sit, amet conse ctetur adipisicing.'
          chapterTitle='Lorem ipsum dolor sit'
          Chapter='1' 
        />
      </section>
    </main>
  );
}

export default Chapter;
