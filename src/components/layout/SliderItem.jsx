import { TMDB_ENDPOINTS } from "../../api/endPoints";
function SliderItem({ movie }) {
  const movieImages = {
    movieOriginalImage: TMDB_ENDPOINTS.MOVIE.getOriginalImage(
      movie.backdrop_path
    ),
    movie50wImage: TMDB_ENDPOINTS.MOVIE.w500Image(movie.poster_path),
  };
  return (
    <div
      className={`bg-cover bg-center flex justify-between items-center text-gray-200 font-roboto`}
      style={{ backgroundImage: `url(${movieImages.movieOriginalImage})` }}
    >
      <div className="w-full h-full backdrop-brightness-50">
        <div className="container mx-auto w-full my-32 flex gap-x-2 justify-center md:justify-between items-center">
          <div className="mx-8 md:w-1/2">
            <h2 className="text-3xl md:text-5xl text-gray-200 font-bold mb-6 text-wrap ">
              {movie.title}
            </h2>
            <p className="text-xs md:text-base font-semibold leading-7">
              {movie.overview}
            </p>
              <button className="px-6 py-1 rounded-3xl bg-red-600 shadow-lg shadow-red-500/50 my-6 cursor-pointer text-xl font-lg font-semibold hover:brightness-75">
                Watch Now
              </button>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl/70 hidden md:block md:w-xs">
            <img src={`${movieImages.movie50wImage}`} alt="poster" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SliderItem;
