import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ key, posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="poster pic"></img>
    </div>
  );
};

export default MovieCard;
