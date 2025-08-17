import { Header, Slider, MoviesList } from "../components";
function Home() {
  const categories = [
    "top rated",
    "popular",
    "tv series",
    "top rated tv series",
  ];
  return (
    <>
      <Header position={'absloute absolute top-0 left-0 z-50'} />
      <Slider />
      {categories.map((category, i) => (
        <MoviesList movieListCategory={category} key={i} />
      ))}
    </>
  );
}

export default Home;
