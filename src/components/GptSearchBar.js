import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const changedLanguage = useSelector((store) => store.config?.lang);
  if (!changedLanguage) return;
  console.log(lang[changedLanguage]?.search);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[changedLanguage]?.gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[changedLanguage]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
