import { TMDB_ENDPOINTS } from "../../api/endPoints";
export default function MovieCard({ movie }) {

  return (
    <div className="relative group/button">
      <button
        className="cursor-pointer rounded-3xl overflow-hidden shadow-2xl hover:brightness-50"
      >
        <img
          src={TMDB_ENDPOINTS.MOVIE.w500Image(movie.poster_path) || TMDB_ENDPOINTS.MOVIE.getOriginalImage(movie.backdrop_path)}
          alt={movie.title}
        />
      </button>
      <h4 className=" text-sm md:text-xl font-semibold text-gray-200">
        {movie.title || movie.name}
      </h4>
    </div>
  );
}
