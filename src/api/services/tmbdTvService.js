import tmbdClientAPI from "../axiosClient";
import { TMDB_ENDPOINTS } from "../endPoints";
import { ApiServiceError } from "../Errors";

const TVService = {
  getTVByID: async (id) => {
    try {
      const response = await tmbdClientAPI.get(TMDB_ENDPOINTS.TV.BY_ID(id));
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "TV Service",
        "Error While Fetching TV Series By ID",
        error
      );
    }
  },
  getPopularTV: async (page = 1) => {
    try {
      const response = await tmbdClientAPI.get(TMDB_ENDPOINTS.TV.POPULAR, {
        params: { page },
      });
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "TV Service",
        "Error While Fetching Popular TVs",
        error
      );
    }
  },
  getTopRatedTV: async (page = 1) => {
    try {
      const response = await tmbdClientAPI.get(TMDB_ENDPOINTS.TV.TOP_RATED, {
        params: { page },
      });
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "TV Service",
        "Error While Fetching Top Rated TVs",
        error
      );
    }
  },
  getTVDetails: async (id) => {
    try {
      const response = await tmbdClientAPI.get(TMDB_ENDPOINTS.TV.DETAILS(id), {
        params: {
          append_to_response: "videos, credits, similars, images",
        },
      });
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "TV Service",
        "Error While Fetching TV Details",
        error
      );
    }
  },
  getTVCredits: async (id) => {
    try {
      const response = await tmbdClientAPI.get(TMDB_ENDPOINTS.TV.CREDITS(id));
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "TV Service",
        "Error While Fetching TV Credits",
        error
      );
    }
  },
  getTVRecommendation: async (id) => {
    try {
      const response = await tmbdClientAPI.get(
        TMDB_ENDPOINTS.TV.RECOMMENDATIONS(id)
      );
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "TV Service",
        "Error While Fetching TV Recommendation",
        error
      );
    }
  },
  getTV_Vedios: async (id) => {
    try {
      const response = await tmbdClientAPI.get(TMDB_ENDPOINTS.TV.VIDEOS(id));
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "TV Service",
        "Error While Fetching TV Vedios",
        error
      );
    }
  },
  getMovieSimilar: async (id) => {
    try {
      const response = await tmbdClientAPI.get(TMDB_ENDPOINTS.TV.SIMILAR(id));
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "TV Service",
        "Error While Fetching TV Smiliar",
        error
      );
    }
  },
};
export default TVService;
