import tmbdClientAPI from "../axiosClient";
import { TMDB_ENDPOINTS } from "../endPoints";
import { ApiServiceError } from "../Errors";

const movieService = {
  getMovieByID: async (id) => {
    try {
      const response = await tmbdClientAPI.get(TMDB_ENDPOINTS.MOVIE.BY_ID(id));
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "Movie",
        "Error While Fetching Movie By ID",
        error
      );
    }
  },
  getPopularMovies: async (page = 1) => {
    try {
      const response = await tmbdClientAPI.get(TMDB_ENDPOINTS.MOVIE.POPULAR, {
        params: { page:page },
      });
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "Movie Service",
        "Error While Fetching Popular Movies",
        error
      );
    }
  },
  getTopRatedMovies: async (page = 1) => {
    try {
      const response = await tmbdClientAPI.get(TMDB_ENDPOINTS.MOVIE.TOP_RATED, {
        params: { page },
      });
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "Movie Service",
        "Error While Fetching Top Rated Movies",
        error
      );
    }
  },
  getMovieDetails: async (id) => {
    try {
      const response = await tmbdClientAPI.get(
        TMDB_ENDPOINTS.MOVIE.DETAILS(id),
        {
          params: {
            append_to_response: "videos, credits, similars, images",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "Movie Service",
        "Error While Fetching Movie Details",
        error
      );
    }
  },
  getMovieCredits: async (id) => {
    try {
      const response = await tmbdClientAPI.get(
        TMDB_ENDPOINTS.MOVIE.CREDITS(id)
      );
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "Movie Service",
        "Error While Fetching Movie Credits",
        error
      );
    }
  },
  getMovieRecommendation: async (id) => {
    try {
      const response = await tmbdClientAPI.get(
        TMDB_ENDPOINTS.MOVIE.RECOMMENDATIONS(id)
      );
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "Movie Service",
        "Error While Fetching Movie Recommendation",
        error
      );
    }
  },
  getMovieVedios: async (id) => {
    try {
      const response = await tmbdClientAPI.get(TMDB_ENDPOINTS.MOVIE.VIDEOS(id));
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "Movie Service",
        "Error While Fetching Movie Vedios",
        error
      );
    }
  },
  getMovieSimilar: async (id) => {
    try {
      const response = await tmbdClientAPI.get(
        TMDB_ENDPOINTS.MOVIE.SIMILAR(id)
      );
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "Movie Service",
        "Error While Fetching Movie Smiliar",
        error
      );
    }
  },
};

export default movieService;
