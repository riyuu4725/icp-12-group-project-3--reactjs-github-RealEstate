import React from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="relative flex justify-center items-center flex-wrap w-full">
        <img
          src="../src/images/home/backgroundRealEstate.jpeg"
          alt="background-image"
          className="w-full h-180 brightness-30"
        />
        <div className="absolute top-45 md:pl-0">
          <p className="text-4xl w-90 md:w-150 md:text-6xl font-medium text-white">
            Find Your Perfect Home with 
            <span className="text-red-500"> RealEstate</span> Realty
          </p>
          <p className="text-white m-0 text-lg md:text-xl w-80  my-8 md:w-170 ">
            Discover exceptional properties in prime locations. Whether you're
            buying, selling, or renting, we're here to make your real estate
            journey seamless.
          </p>
          <Link to="/properties">
            <button className=" px-3 py-2 md:px-6 md:my-4 md:py-2.5 text-lg bg-red-500 text-white rounded-xl cursor-pointer hover:bg-red-600 duration-300">
              Explore Properties →
            </button>
            <Link to="/contact">
              <button className=" py-1.5 px-4 md:py-2 md:px-8 text-lg bg-white/20 text-white cursor-pointer rounded-lg border border-white m-2.5 hover:bg-white/40 transition duration-300">
                Contact Us
              </button>
            </Link>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
