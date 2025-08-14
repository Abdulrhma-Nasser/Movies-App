import Header from "../components/layout/Header";
import Slider from "../components/layout/heroSlider/Slider";
import MoviesList from "../components/layout/MoviesList";

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <MoviesList movieListCategory={"top rated"} />
      <MoviesList movieListCategory={"popular"} />
      <MoviesList movieListCategory={"tv series"} />
      <MoviesList movieListCategory={"top rated tv series"} />
    </>
  );
}

export default Home;
