import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-transparent py-1 md:py-4 text-gray-200 font-montserrat absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-2 flex justify-center items-center flex-col gap-y-1 md:flex-row md:justify-between ">
        <div className="flex gap-x-2 justify-center items-center">
          <img src="src\assets\tmovie.png" alt="Logo" className="w-5 md:w-10" />
          <h1 className="text-xl font-semibold md:text-4xl">Cinema</h1>
        </div>
        <nav className="flex items-center justify-between gap-x-4 text-sm font-semibold md:text-xl md:gap-x-8">
          <Link to="/" className="group/link relative">
            Home
            <span className="absolute bottom-[-6px] left-0 w-0 h-0 group-hover/link:w-full group-hover/link:h-0.5  bg-red-600 transition[width] duration-300 ease-in-out"></span>
          </Link>
          <Link to="movies" className="group/link relative">
            Movies
            <span className="absolute bottom-[-6px] left-0 w-0 h-0 group-hover/link:w-full group-hover/link:h-0.5 bg-red-600 transition-[width] duration-300 ease-in-out"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
