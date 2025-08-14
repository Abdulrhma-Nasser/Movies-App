function Footer() {
  return (
    <div className="bg-[url('/src/assets/footer-bg.jpg')] w-full text-gray-200 my-6 text-left flex justify-center items-center font-roboto text-base flex-col p-6">
      <div className="flex gap-x-2 justify-center items-center mt-3">
        <img src="src\assets\tmovie.png" alt="Logo" className="w-8 my-3" />
        <h1 className="text-xl font-semibold">Cinema</h1>
      </div>
      <ul className="grid grid-cols-3 grid-rows-3 text-xs md:text-sm p-6 gap-x-12 gap-y-0.5 md:gap-x-30 md:gap-y-3">
        <li className="">Home</li>
        <li className="">About Us</li>
        <li className="">Contact us</li>
        <li className="">Term of Service</li>
        <li className="">Live</li>
        <li className="">FAQ</li>
        <li className="">Preimum</li>
        <li className="">Privacy Policy</li>
        <li className="">You Must Watch</li>
        <li className="">Recent Release</li>
        <li className="">
          Top IMBD
        </li>
      </ul>
    </div>
  );
}

export default Footer;
