import { useEffect, useState } from "react";
import { movieService, TVService } from "../../api/services";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Button from "../common/Button";
import MovieCard from "./MovieCard";

function MoviesList({ movieListCategory, id }) {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetchMovieCategor(movieListCategory, id).then((response) =>
      setMovieList(response.results)
    );
  }, [movieListCategory, id]);
  return (
    <div className="container mx-auto font-roboto my-8  text-gray-200">
      <div className="my-10 max-md:px-3  flex justify-between items-center">
        <h3 className="text-xl font-semibold capitalize">
          {movieListCategory}
        </h3>
        <Button title={"View More"} />
      </div>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={13}
        slidesPerView="auto"
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {movieList.map((movie) => (
          <SwiperSlide key={movie.id} style={{ width: "22%" }}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function fetchMovieCategor(category, id) {
  switch (category) {
    case "recommendation":
      return movieService.getMovieRecommendation(id);
    case "similar":
      return movieService.getMovieSimilar(id);
    case "top rated":
      return movieService.getTopRatedMovies();
    case "popular":
      return movieService.getPopularMovies();
    case "tv series":
      return TVService.getPopularTV();
    case 'top rated tv series':
      return TVService.getTopRatedTV();  
  }
}

export default MoviesList;
