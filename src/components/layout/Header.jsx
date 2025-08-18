import { Link } from "react-router-dom";

export default function Header({position = 'block'}) {
  const absloute = position;
  return (
    <header className={`bg-transparent py-1 md:py-4 text-gray-200 font-montserrat  w-full ${absloute}`}>
      <div className="container mx-auto px-4 py-4 flex justify-center items-center flex-col gap-y-1 md:flex-row md:justify-between ">
        <div className="flex gap-x-2 justify-center items-center">
          <img src="src\assets\tmovie.png" alt="Logo" className="w-8 md:w-10" />
          <h1 className="text-2xl font-semibold md:text-4xl">Cinema</h1>
        </div>
        <nav className="flex items-center justify-between gap-x-4 text-lg font-semibold md:text-2xl md:gap-x-8">
          <Link to="/" replace={true} className="group/link relative">
            Home
            <span className="absolute bottom-[-6px] left-0 w-0 h-0 group-hover/link:w-full group-hover/link:h-0.5  bg-red-600 transition[width] duration-300 ease-in-out"></span>
          </Link>
          <Link replace={true} to="/movies" className="group/link relative">
            Movies
            <span className="absolute bottom-[-6px] left-0 w-0 h-0 group-hover/link:w-full group-hover/link:h-0.5 bg-red-600 transition-[width] duration-300 ease-in-out"></span>
          </Link>
          <Link replace={true} to="/favorites" className="group/link relative">
            Favorites
            <span className="absolute bottom-[-6px] left-0 w-0 h-0 group-hover/link:w-full group-hover/link:h-0.5 bg-red-600 transition-[width] duration-300 ease-in-out"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
