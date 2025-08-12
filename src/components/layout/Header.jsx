import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-transparent py-4 text-gray-200 font-montserrat absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-2 flex justify-center items-center flex-col gap-y-2 md:flex-row md:justify-between ">
        <div className="flex gap-x-2 justify-center items-center">
          <img src="src\assets\tmovie.png" alt="Logo" className="w-10" />
          <h1 className="text-3xl font-semibold md:text-4xl">Cinema</h1>
        </div>
        <nav className="flex items-center justify-between gap-x-4 text-lg font-semibold md:text-xl md:gap-x-8">
          <NavLink to="Home" className="group/link relative">
            Home
            <span className="absolute bottom-[-6px] left-0 w-0 h-0 group-hover/link:w-full group-hover/link:h-0.5  bg-red-600 transition[width] duration-300 ease-in-out"></span>
          </NavLink>
          <NavLink to="movies" className="group/link relative">
            Movies
            <span className="absolute bottom-[-6px] left-0 w-0 h-0 group-hover/link:w-full group-hover/link:h-0.5 bg-red-600 transition-[width] duration-300 ease-in-out"></span>
          </NavLink>
          <NavLink to="TV" className="group/link relative">
            TV Series{" "}
            <span className="absolute bottom-[-6px] left-0 w-0 h-0 group-hover/link:w-full group-hover/link:h-0.5 bg-red-600 transition[width] duration-300 ease-in-out"></span>
          </NavLink>
          <NavLink to="favorite" className="group/link relative">
            Favorites{" "}
            <span className="absolute bottom-[-6px] left-0 w-0 h-0 group-hover/link:w-full group-hover/link:h-0.5 bg-red-600 transition[width] duration-300 ease-in-out"></span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
//flex text-sm md:gap-x-6 justify-center md:text-xl text-gray-200 font-semibold
