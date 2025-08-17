const favoriteService = {
  getFavorites() {
    const favorites = localStorage.getItem("favMovies");
    return favorites ? JSON.parse(favorites) : [];
  },

  addFavorite(movieId) {
    const favorites = this.getFavorites();
    if (!favorites.includes(movieId)) {
      const updatedFavorites = [...favorites, movieId];
      localStorage.setItem("favMovies", JSON.stringify(updatedFavorites));
    }
  },

  removeFavorite(movieId) {
    const updatedFavorites = this.getFavorites().filter((id) => id !== movieId);
    localStorage.setItem("favMovies", JSON.stringify(updatedFavorites));
  },
  removeAllFavorites() {
    localStorage.clear();
  },

  isFavorite(movieId) {
    return this.getFavorites().includes(movieId);
  },
};
export default favoriteService;
