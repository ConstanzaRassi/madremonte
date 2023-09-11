import React from "react";
import ReactPlayer from "react-player";
import Video from "../images/video.MP4";

function Music() {
  return (
    <div>
      <ReactPlayer url={Video} controls></ReactPlayer>
    </div>
  );
}

export default Music;
