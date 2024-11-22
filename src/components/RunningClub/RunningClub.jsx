import React from "react";
import blogImg from "../../assets/images/blogImg.jpeg";
import { Link } from "react-router-dom";

const JoinClub = () => {
  return (
    <div
      className="lg:h-screen bg-fixed bg-center bg-cover flex items-center pb-8"
      style={{ backgroundImage: `url(${blogImg})` }}
    >
      <div className=" text-white lg:space-y-10 space-y-5 pl-10 lg:pl-20">
        <h1 className="text-2xl lg:text-4xl font-bold text-white">
          Join Our Running Club Now <span className="bg-[#C3E92D] rounded-full px-2 text-black">-30%</span>
        </h1>
        <div>
            <h1 className="lg:text-7xl text-3xl font-semibold">RUNNING CLUB</h1>
        </div>
        <div>
         <Link to="/register">
         <button className="bg-[#C3E92D] hover:bg-black hover:text-[#C3E92D] text-black font-medium lg:py-3 py-2 px-6  rounded-md">
            JOIN NOW
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinClub;
