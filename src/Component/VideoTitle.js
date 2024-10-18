import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video  absolute pt-[20%] px-24 text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 w-1/4 text-xl">{overview}</p>
      <div>
        <button className="text-black bg-white p-4 px-12 rounded-lg text-xl cursor-pointer hover:bg-opacity-50">
          ▷ Play
        </button>
        <button className="mx-2 text-white bg-gray-500  p-4 px-12 text-xl rounded-lg bg-opacity-50 cursor-pointer">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
