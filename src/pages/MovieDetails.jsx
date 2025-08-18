import { useEffect, useState } from "react";
import { Footer, Header, MoviesList } from "../components";
import { useParams } from "react-router-dom";
import { movieService } from "../api/services";
import { TMDB_ENDPOINTS } from "../api/endPoints";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    movieService.getMovieByID(movieId).then((response) => {
      setMovie(response);
    });
    movieService.getMovieCredits(movieId).then((response) => {
      setCredits(response.cast.slice(0, 3));
    });
  }, [movieId]);

  if (!movie || !credits) return <div className="text-white">Loading...</div>;

  return (
    <div className="h-screen">
      <Header position="absolute top-0 left-0 z-50" />

      <div
        className="h-1/4 md:h-3/4 relative bg-cover bg-center after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-neutral-900/30"
        style={{
          backgroundImage: `url(${TMDB_ENDPOINTS.MOVIE.getOriginalImage(
            movie.backdrop_path || movie.poster_path
          )})`,
        }}
      >
        <div className="absolute top-10/12 z-30">
          <div className="flex justify-center">
            <div className="md:flex justify-center items-center w-3/4 text-gray-200 gap-10 shadow-2xl ">
              <img
                src={TMDB_ENDPOINTS.MOVIE.w500Image(movie.poster_path)}
                className="w-1/3 rounded-3xl hidden md:block"
              />
              <div className="self-start">
                <h2 className="text-6xl font-bold ">{movie.title}</h2>
                <ul className="flex justify-start my-4">
                  {movie.genres.map((genre) => (
                    <li
                      key={genre.id}
                      className="px-3 py-0.5 mr-4  border-2 rounded-2xl text-sm md:text-lg font-medium"
                    >
                      {genre.name}
                    </li>
                  ))}
                </ul>
                <p className="text-xl font-medium">{movie.overview}</p>
                <div className="flex mt-5 gap-5">
                  {credits.map((credit, i) => {
                    return (
                      <div key={i} className="w-1/5 rounded-xl overflow-hidden">
                        <img
                          src={TMDB_ENDPOINTS.MOVIE.w500Image(
                            credit.profile_path
                          )}
                        />
                        <h3 className="mt-2 text-lg font-medium">
                          {credit.name}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <MoviesList movieListCategory={"similar"} id={movieId} />
          <MoviesList movieListCategory={"recommendation"} id={movieId} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
