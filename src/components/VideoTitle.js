import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute bg-gradient-to-r from black text-white w-screen aspect-video">
      <h1 className="text-3xl font-bold w-1/5">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2 hover:bg-opacity-30">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
