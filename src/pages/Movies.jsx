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
        <h3 className=" px-2 py-1 rounded-2xl lg:px-6 lg:py-1 ml-2 lg:rounded-3xl bg-red-600 shadow-xl shadow-red-500/40 text-gray-200 capitalize text-base lg:text-xl font-lg font-bold">
          automatic search
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-6 container mx-auto my-15 ">
        {results.map((result) => {
          return <MovieCard movie={result} key={result.id} />;
        })}
      </div>
    </>
  );
}

export default Movies;
