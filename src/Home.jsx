import React from "react";
import pharmacy from "./assets/Pharmacy.jpg";
import Logo from "./assets/Logo.jpg";

const Home = () => {
  return (
    <div>
      <header className="relative bg-blue-800 h-40 flex flex-col items-center justify-center">
        <p className="text-white  ">
          📍 12445 Lake Fraser Dr SE #309, Calgary, AB T2J 7G9, Canada.  📞 (403) 720-6337</p>

        <ul className="flex gap-25 mt-16 pl-90 text-white text-lg font-semibold">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Special Offers</li>
          <li>Blog</li>
          <li>Contact US</li>
          <li>
            <button className="bg-blue-600 text-white rounded-[4px] px-4 py-1">
              Book Online
            </button>
          </li>
        </ul>

        <img
          src={Logo}
          alt="Logo"
          className="absolute top-30 left-[15%] -translate-x-1/2 -mt-12 w-50 h-50 rounded-full bg-white p-2 shadow-lg z-10"
        />
      </header>

      <div className="relative">
        <img
          src={pharmacy}
          alt="photo"
          className="w-screen h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col pt-60 ">
          <h1 className="text-5xl font-bold text-black-700 text-left pl-30">
            Your neighborhood <br />
            Pharmacy in Calgary - <br /> Care You Can Count <br /> On
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
