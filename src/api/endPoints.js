export const TMDB_ENDPOINTS = {
  ACCOUNT: {
    FAVORITE_MOVIES: (account_id) => `account/${account_id}/favorite/movies`,
    FAVORITE_TV: (account_id) => `account/${account_id}/favorite/tv`,
    ADD_FAVORITE: (account_id) => `account/${account_id}/favorite`,
  },
  MOVIE: {
    POPULAR: "/movie/popular",
    TOP_RATED: "/movie/top_rated",
    BY_ID: (id) => `/movie/${id}`,
    DETAILS: (id) => `/movie/${id}`,
    CREDITS: (id) => `/movie/${id}/credits`,
    RECOMMENDATIONS: (id) => `/movie/${id}/recommendations`,
    VIDEOS: (id) => `/movie/${id}/videos`,
    SIMILAR: (id) => `/movie/${id}/similar`,
    getOrginalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  },
  TV: {
    POPULAR: "/tv/popular",
    TOP_RATED: "/tv/top_rated",
    BY_ID: (id) => `/tv/${id}`,
    DETAILS: (id) => `/tv/${id}`,
    CREDITS: (id) => `/tv/${id}/credits`,
    VIDEOS: (id) => `/tv/${id}/videos`,
    SIMILAR: (id) => `/tv/${id}/similar`,
  },
  SEARCH: {
    MOVIE: "/search/movie",
    TV: "/search/tv",
  },
  TRENDING: {
    ALL: (timeWindow = "week") => `/trending/all/${timeWindow}`,
    MOVIES: (timeWindow = "week") => `/trending/movie/${timeWindow}`,
    TV: (timeWindow = "week") => `/trending/tv/${timeWindow}`,
    PEOPLE: (timeWindow = "week") => `/trending/person/${timeWindow}`,
  },
};
