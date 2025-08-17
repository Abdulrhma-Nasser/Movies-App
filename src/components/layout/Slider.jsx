import { useEffect, useState } from "react";
import movieService from "../../api/services/tmbdMovieService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import SliderItem from "./SliderItem";
export default function Slider() {
  const [carouselMovies, setCarouselMovies] = useState([]);
  useEffect(() => {
    movieService
      .getPopularMovies()
      .then((response) => setCarouselMovies(response.results.slice(8, 15)));
  }, []);
  return (
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
      >
        {carouselMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <SliderItem movie={movie} key={movie.id} />
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
