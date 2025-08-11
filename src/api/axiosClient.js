import axios from "axios";
import { APIError, NetworkError, RequestError } from "./Errors";

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const tmbdClientAPI = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASEURL,
  timeout: 10000,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTBiYTBlZjZlZmNhMDViMzJmYmU3M2EyMGE1NjFmMyIsIm5iZiI6MTc1NDg5Nzg3Mi45NzIsInN1YiI6IjY4OTk5ZGQwNGMyOGUyMzEwYzVlMzhhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q-wUKQ2wb3VkAA9ZVDMapmttFHvUxEu8Tjh0AAqOZbE",
  },
});

tmbdClientAPI.interceptors.request.use(
  (config) => {
    return applyJsonContentTypeIfNeeded(
      putAPIKeyInsideConfigParams(config, TMDB_API_KEY)
    );
  },
  (error) => {
    return Promise.reject(error);
  }
);

function putAPIKeyInsideConfigParams(config, TMDB_API_KEY) {
  if (!TMDB_API_KEY) {
    throw new Error("TMDB API key is missing");
  }
  return {
    ...config,
    params: {
      ...config.params,
      api_key: TMDB_API_KEY,
    },
  };
}

function applyJsonContentTypeIfNeeded(config) {
  const METHODS_NEEDING_JSON = new Set(["post", "patch", "put"]);
  const ShouldAddJsonContentTypeHeader = METHODS_NEEDING_JSON.has(
    config.method?.toLowerCase()
  );

  return ShouldAddJsonContentTypeHeader
    ? {
        ...config,
        headers: {
          ...config.headers,
          "Content-Type": "application/json",
        },
      }
    : config;
}

tmbdClientAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(handlingResponseInterceptorError(error));
  }
);

function handlingResponseInterceptorError(error) {
  if (error.response) {
    return handleResponseError(error);
  } else if (error.request) {
    return handleNetworkError();
  } else {
    return handleRequestError(error);
  }
}

function handleResponseError(error) {
  const { status, data } = error.response;
  const message = data?.status_message || "Unknown API Error";

  switch (status) {
    case 401:
      return new APIError("Invalid API key", status);
    case 404:
      return new APIError("Resource not found", status);
    case 429:
      return new APIError("Too many requests - rate limit exceeded", status);
    default:
      return new APIError(message, status);
  }
}

function handleNetworkError() {
  return new NetworkError();
}

function handleRequestError(error) {
  return new RequestError(error.message);
}
export default tmbdClientAPI;
