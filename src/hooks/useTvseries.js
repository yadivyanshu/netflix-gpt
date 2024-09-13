import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTvseries } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTvseries = () => {
  const dispatch = useDispatch();
  const tvseries = useSelector((store) => store.movies.tvseries);

  const getTvseries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTvseries(json.results));
  };

  useEffect(() => {
    !tvseries && getTvseries();
  }, []);
};

export default useTvseries;
