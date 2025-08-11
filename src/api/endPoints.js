export const TMDB_ENDPOINTS = {
  ACCOUNT: {
    FAVORITE_MOVIES: "account/{account_id}/favorite/movies",
    FAVORITE_TV: "account/{account_id}/favorite/tv",
    DETAILS: (id) => `account/${id}`,
  },
  MOVIE: {
    POPULAR: "/movie/popular",
    TOP_RATED: "/movie/top_rated",
    DETAILS: (id) => `/movie/${id}`,
    CREDITS: (id) => `/movie/${id}/credits`,
    RECOMMENDATIONS: (id) => `/movie/${id}/recommendations`,
    VIDEOS: (id) => `/movie/${id}/videos`,
    SIMILAR: (id) => `/movie/${id}/similar`,
  },
  TV: {
    POPULAR: "/tv/popular",
    TOP_RATED: "/tv/top_rated",
    BY_ID: (id) => `/tv/${id}`,
    CREDITS: (id) => `/tv/${id}/credits`,
    VIDEOS: (id) => `/tv/${id}/videos`,
    SIMILAR: (id) => `/tv/${id}/similar`,
    SEASON: (id, seasonNumber) => `/tv/${id}/season/${seasonNumber}`,
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
