import tmbdClientAPI from "../axiosClient";
import { TMDB_ENDPOINTS } from "../endPoints";
import { ApiServiceError } from "../Errors";

const searchService = {
  movieSearch: async (page = 1, query = '') => {
    try {
      const response = await tmbdClientAPI.get(TMDB_ENDPOINTS.SEARCH.MOVIE, {
        params: { page: page, query: query },
      });
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "Search Service",
        "Error While Search For a Movie",
        error
      );
    }
  },
  TVSearch: async (page = 1, query) => {
    try {
      const response = await tmbdClientAPI.get(TMDB_ENDPOINTS.SEARCH.TV, {
        params: { page: page, query: query },
      });
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "TV Service",
        "Error While Search For a TV",
        error
      );
    }
  },
};
export default searchService;
