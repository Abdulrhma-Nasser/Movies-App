import tmbdClientAPI from "../axiosClient";
import { TMDB_ENDPOINTS } from "../endPoints";
import { ApiServiceError } from "../Errors";

const accountService = {
  getFavoriteMovies: async (account_id, page = 1) => {
    try {
      const response = await tmbdClientAPI.get(
        TMDB_ENDPOINTS.ACCOUNT.FAVORITE_MOVIES(account_id),
        {
          params: { page: page },
        }
      );
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "Account Service",
        "Error While Get Favorite Movies",
        error
      );
    }
  },
  getFavoriteTV: async (account_id, page = 1) => {
    try {
      const response = await tmbdClientAPI.get(
        TMDB_ENDPOINTS.ACCOUNT.FAVORITE_TV(account_id),
        {
          params: { page: page },
        }
      );
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "Account Service",
        "Error While Get Favorite TV",
        error
      );
    }
  },
  addToFavorite: async (account_id) => {
    try {
      const response = await tmbdClientAPI.post(
        TMDB_ENDPOINTS.ACCOUNT.ADD_FAVORITE(account_id)
      );
      return response.data;
    } catch (error) {
      throw new ApiServiceError(
        "Account Service",
        "Error While Add To Favorite",
        error
      );
    }
  },
};
export default accountService;