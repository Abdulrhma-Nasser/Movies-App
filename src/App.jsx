import { Outlet } from "react-router-dom";
import Slider from "./components/layout/heroSlider/Slider";
import Header from "./components/layout/Header";
import MoviesList from "./components/layout/MoviesList";

function App() {
  return (
    <div className="relative">
      <Header/>
      <Slider/>
      <MoviesList movieListCategory={'Popular Movies'}/>
      <Outlet />
    </div>
  );
}

export default App;
