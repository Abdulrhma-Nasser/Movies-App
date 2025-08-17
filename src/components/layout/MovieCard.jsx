import { TMDB_ENDPOINTS } from "../../api/endPoints";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import { HeartIcon as OutlinedHeart } from "@heroicons/react/24/outline";
import { ArrowRightEndOnRectangleIcon as ArrowRight } from "@heroicons/react/24/outline";
import { favoriteService } from "../../api/services";
import { useEffect, useState } from "react";
export default function MovieCard({ movie, onUnFavorite }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favoriteService.isFavorite(movie.id));
  }, [movie]);

  function onTogglingFavorite(movieId) {
    if (isFavorite) {
      favoriteService.removeFavorite(movieId);
    } else {
      favoriteService.addFavorite(movieId);
    }
    setIsFavorite(!isFavorite);
  }
  return (
    <div className="relative group/button">
      <img
        src={
          TMDB_ENDPOINTS.MOVIE.w500Image(movie.poster_path) ||
          TMDB_ENDPOINTS.MOVIE.getOriginalImage(movie.backdrop_path)
        }
        alt={movie.title}
        className="group-hover/button:brightness-50 transition rounded-3xl shadow-2xl"
      />

      <div className="flex p-2 xl:hidden group-hover/button:flex justify-center items-center gap-x-5 lg:absolute lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 mt-1 w-full ">
        {isFavorite ? (
          <SolidHeart
            onClick={() => {
              onTogglingFavorite(movie.id);
              onUnFavorite(movie);
            }}
            className="w-5 h-5 md:w-7 md:h-7  lg:w-12 lg:h-12 text-red-600 lg:p-3 lg:bg-gray-100/30 lg:rounded-3xl cursor-pointer"
          />
        ) : (
          <OutlinedHeart
            onClick={() => onTogglingFavorite(movie.id)}
            className="w-5 h-5 md:w-7 md:h-7 lg:w-12 lg:h-12 text-gray-200 lg:p-3 lg:bg-gray-100/30 lg:rounded-3xl cursor-pointer transition hover:text-red-600"
          />
        )}
        <ArrowRight className=" w-5 h-5 md:w-7 md:h-7 lg:w-12 lg:h-12 text-gray-200 lg:p-3 lg:bg-gray-100/30 lg:rounded-3xl cursor-pointer transition hover:text-red-600 text-sm" />
      </div>

      <h4 className="text-sm md:text-xl font-semibold text-gray-200 group-hover/button:brightness-100 brightness-100 lg:mt-2">
        {movie.title || movie.name}
      </h4>
    </div>
  );
}
