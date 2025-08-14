import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import {Movies, NotFound, TVSeries } from "./pages";
import Favorite from "./pages/Favorite.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "movies", element: <Movies />, errorElement: <ErrorPage /> },
      { path: "TV", element: <TVSeries />, errorElement: <ErrorPage /> },
      { path: "favorite", element: <Favorite />, errorElement: <ErrorPage /> },
      { path: "*", element: <NotFound />, errorElement: <ErrorPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
