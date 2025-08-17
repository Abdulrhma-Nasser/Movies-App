import { useEffect, useState } from "react";
import { MovieCard, Header } from "../components";
import { searchService } from "../api/services";
import { TMDB_ENDPOINTS } from "../api/endPoints";

function Movies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([""]);
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      searchService.movieSearch(1, searchQuery).then((response) => {
        setResults(response.results);
      });
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  function onSearch(searchQuery) {
    setSearchQuery(searchQuery);
  }

  return (
    <>
      <Header />
      <div className=" container mx-auto flex justify-center w-full mt-5 p-2">
        <input
          type="text"
          onChange={(e) => {
            onSearch(e.target.value);
          }}
          placeholder="Search For A Movie"
          className="border-2 border-neutral-800 w-1/2 p-1 rounded-xl bg-transparent text-red-500 focus:outline-0 placeholder:text-gray-100/40 placeholder:text-sm placeholder:p-1"
        />
        <h3 className="px-6 py-1 ml-2 rounded-3xl bg-red-600 shadow-xl shadow-red-500/40 text-gray-200 capitalize text-xl font-lg font-semibold">
          automatic search
        </h3>
      </div>
      <div className="grid grid-cols-5 gap-6 container mx-auto my-15 ">
        {results.map((result) => {
          return <MovieCard movie={result} />;
        })}
      </div>
    </>
  );
}

export default Movies;
