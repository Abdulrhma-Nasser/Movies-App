import { useEffect, useState } from "react";
import { movieService } from "../../api/services";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { TMDB_ENDPOINTS } from "../../api/endPoints";

function MoviesList({ movieListCategory }) {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    movieListCategory === "Popular Movies"
      ? movieService
          .getPopularMovies()
          .then((response) => setMovieList(response.results))
      : movieService
          .getTopRatedMovies()
          .then((response) => setMovieList(response.results));
  }, [movieListCategory]);
  return (
    <div className="container mx-auto font-roboto my-8">
      <div className="my-10 flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-200">
          {movieListCategory}
        </h3>
        <button className="ring px-6 py-1 text-gray-200 rounded-3xl hover:bg-gray-100 font-semibold hover:text-black cursor-pointer">
          View More
        </button>
      </div>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={10}
        slidesPerView="auto"
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {movieList.map((movie) => (
          <SwiperSlide key={movie.id} style={{ width: "20%" }}>
            <img
              src={TMDB_ENDPOINTS.MOVIE.w500Image(movie.poster_path)}
              alt={movie.title}
              className="w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MoviesList;
