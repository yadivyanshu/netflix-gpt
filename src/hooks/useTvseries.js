import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTvseries } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTvseries = () => {
  const dispatch = useDispatch();

  const getTvseries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTvseries(json.results));
  };

  useEffect(() => {
    getTvseries();
  }, []);
};

export default useTvseries;
