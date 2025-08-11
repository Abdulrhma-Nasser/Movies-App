import tmbdClientAPI from "../axiosClient";
import { TMDB_ENDPOINTS } from "../endPoints";

export const movieService = {
  getPopularMovies: async (page = 1) => {
    const response = await tmbdClientAPI.get(TMDB_ENDPOINTS.MOVIE.POPULAR, {
      params: { page },
    });
    return response.data;
  },
};

