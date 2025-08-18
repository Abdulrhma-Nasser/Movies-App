import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import { Home, Movies, Favorite, NotFound, MovieDetails } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      { path: "movies", element: <Movies />, errorElement: <ErrorPage />},
      { path: "favorites", element: <Favorite />, errorElement: <ErrorPage /> },
      { path: "*", element: <NotFound />, errorElement: <ErrorPage /> },
    ],    
  },
  {
    path:'/movieDetails/:movieId',
    element: <MovieDetails/>,
    errorElement: <ErrorPage />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
