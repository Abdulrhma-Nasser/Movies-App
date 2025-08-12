import { useEffect, useState } from "react";
import movieService from "../../api/services/tmbdMovieService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Header from "./Header";
export default function HeroSection() {
  const [carouselMovies, setCarouselMovies] = useState([]);
  useEffect(() => {
    movieService
      .getPopularMovies()
      .then((response) => setCarouselMovies(response.results.slice(4, 10)));
  }, []);
  return (
    <div>
      <Swiper
        modules={{ Autoplay }}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 100,
          disableOnInteraction: false,
        }}
        className="relative w-full max-h-[700px]"
      >
        <Header />
        {carouselMovies.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={"https://image.tmdb.org/t/p/original/" + item.backdrop_path}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
