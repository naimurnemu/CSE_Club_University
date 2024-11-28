import React from "react";
import blogImg from "../../assets/images/blogImg.jpeg";
import { Link } from "react-router-dom";

const JoinClub = () => {
  return (
    <div className="bg-gray-900">
      <div
        className="text-white relative bg-fixed bg-center bg-cover flex items-center pb-8 max-w-screen-xl rounded-md mx-auto"
        style={{ backgroundImage: `url(${blogImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-md"></div>
        <div className="max-w-7xl w-full mx-auto px-2 md:px-5 lg:px-0 lg:py-40 py-20 space-y-3 lg:pl-20 pl-10">
          <h1 className="text-2xl lg:text-4xl font-bold text-white">
            Join Our Running Club Now{" "}
          </h1>
          <div>
            <h1 className="lg:text-7xl text-3xl font-semibold">RUNNING CLUB</h1>
          </div>
          <div className="pt-8">
            <Link to="/register">
              <button className="bg-[#C3E92D] hover:bg-black hover:text-[#C3E92D] text-black font-medium lg:py-4 py-2 px-6 lg:px-10  rounded-md">
                JOIN NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinClub;
