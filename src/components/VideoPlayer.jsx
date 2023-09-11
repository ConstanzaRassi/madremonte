import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer({ video }) {
  return (
    <div className="playerWrap">
      <ReactPlayer url={video} controls className="player"></ReactPlayer>
    </div>
  );
}

export default VideoPlayer;
