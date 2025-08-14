import Header from "../components/layout/Header";
import { searchService } from "../api/services";

import { useState } from 'react';
import MovieCard from "../components/layout/MovieCard";

function Movies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = async (query) => {
    try {
      setIsLoading(true);
      setError(null);
      
      if (query.trim().length < 2) {
        setSearchResults([]);
        return;
      }

      const response = await searchService.movieSearch(1, query);
      setSearchResults(response.results || []);
    } catch (err) {
      setError("Failed to search movies");
      console.error("Search error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <div className="inset-0 bg-[url('/src/assets/footer-bg.jpg')] bg-cover bg-center z-0 p-12 text-center">
        <Header />
      </div>

      <div className="m-8">
        <input
          className="w-1/4 pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-transparent text-red-600"
          type="text"
          value={searchQuery}
          placeholder="Search Movies..."
          onChange={(e) => {
            setSearchQuery(e.target.value);
            onSearch(e.target.value);
          }}
        />
        
        {isLoading && (
          <div className="mt-2 text-blue-500">Searching...</div>
        )}
        {error && (
          <div className="mt-2 text-red-500">{error}</div>
        )}
      </div>

      <div className="grid md:grid-cols-6 grid-cols-3 gap-10">
        {searchResults.map(movie => (
          <div key={movie.id} >
            <MovieCard movie={movie}/>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Movies;
