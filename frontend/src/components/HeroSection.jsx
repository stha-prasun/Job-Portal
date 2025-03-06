import React from "react";
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-[#FFC107] text-white font-bold">
          Find Your Dream Job Now!
        </span>
        <h1 className="text-5xl font-bold">
          Your <span className="text-[#00796B]">Next Big Opportunity</span>{" "}
          <br />
          Is Just a Click Away!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iusto
          corrupti provident voluptatibus sapiente!
        </p>
      </div>
      <div className="join flex w-[40%] shadow-lg border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
        <input
          type="text"
          className="input join-item outline-none border-none w-full"
          placeholder="Find Your Dream Jobs"
        />
        <button className="btn join-item rounded-r-full bg-gray-700">
          <FaSearch className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
