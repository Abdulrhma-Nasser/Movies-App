export const TMDB_ENDPOINTS = {
  MOVIE: {
    POPULAR: "/movie/popular",
    TOP_RATED: "/movie/top_rated",
    BY_ID: (id) => `/movie/${id}`,
    DETAILS: (id) => `/movie/${id}`,
    CREDITS: (id) => `/movie/${id}/credits`,
    RECOMMENDATIONS: (id) => `/movie/${id}/recommendations`,
    VIDEOS: (id) => `/movie/${id}/videos`,
    SIMILAR: (id) => `/movie/${id}/similar`,
    getOriginalImage: (imgPath) =>
      `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  },
  SEARCH: {
    MOVIE: "/search/movie",
  },
  TRENDING: {
    MOVIES: (timeWindow = "week") => `/trending/movie/${timeWindow}`,
    PEOPLE: (timeWindow = "week") => `/trending/person/${timeWindow}`,
  },
};
