import { useEffect, useState } from "react";
import { favoriteService, movieService } from "../api/services";
import { Header, MovieCard } from "../components";

function Favorite() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const favoriteIds = favoriteService.getFavorites();
    Promise.all(favoriteIds.map((id) => movieService.getMovieByID(id))).then(
      (response) => setFavorites(response)
    );
  }, []);

  function onUnFavorite(unFavMovie) {
    setFavorites(favorites.filter((movie) => movie != unFavMovie));
  }

  return (
    <>
      <Header />
      <h2 className="text-gray-200 text-2xl text-center font-semibold font-montserrat">
        Your Favorites
      </h2>

      <div className=" container mx-auto my-10 grid grid-cols-5 gap-5 text-amber-50 text-3xl">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} onUnFavorite={onUnFavorite}/>
        ))}
      </div>
    </>
  );
}

export default Favorite;
