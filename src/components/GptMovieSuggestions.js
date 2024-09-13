import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null; // can show shimmer UI

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};
