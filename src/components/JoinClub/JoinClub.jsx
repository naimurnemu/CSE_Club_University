import React from "react";
import { FaTwitter, FaDribbble, FaBehance, FaPinterest } from "react-icons/fa";
import banner from "../../assets/images/joinClubImg.jpg";

const JoinClub = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Left Side: Image Section */}

      <div className="lg:w-1/2">
        <img className="lg:h-screen" src={banner} alt="" />
      </div>

      {/* Right Side: Form Section */}
      <div className="w-full md:w-1/2 bg-[#C3E92D] text-black flex flex-col px-6 py-8 md:px-8 md:py-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">START</h1>
        <h2 className="text-normal md:text-2xl font-bold mb-4 md:mb-6">
          JOIN OUR RUNNING CLUB NOW
        </h2>
        <div className="mb-4 md:mb-6 text-sm md:text-base">
          <p>
            <span className="font-semibold">Phone: </span>
            (555) 123-4567
          </p>
          <p>
            <span className="font-semibold">Email: </span>
            hello@zunzo.com
          </p>
        </div>
        <div className="flex justify-center md:justify-start gap-4 mb-6 md:mb-8">
          <a href="#" aria-label="Twitter">
            <FaTwitter className="text-black text-lg md:text-xl" />
          </a>
          <a href="#" aria-label="Dribbble">
            <FaDribbble className="text-black text-lg md:text-xl" />
          </a>
          <a href="#" aria-label="Behance">
            <FaBehance className="text-black text-lg md:text-xl" />
          </a>
          <a href="#" aria-label="Pinterest">
            <FaPinterest className="text-black text-lg md:text-xl" />
          </a>
        </div>
        <form className="w-full max-w-sm md:max-w-md grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your name*"
            className="col-span-1 p-2 md:p-3 bg-white text-black border border-white rounded-md"
          />
          <input
            type="email"
            placeholder="Your email*"
            className="col-span-1 p-2 md:p-3 bg-white text-black border border-white rounded-md"
          />
          <input
            type="tel"
            placeholder="Telephone*"
            className="col-span-1 p-2 md:p-3 bg-white text-black border border-white rounded-md"
          />
          <select
            className="col-span-1 p-2 md:p-3 bg-white text-black border border-white rounded-md"
            defaultValue=""
          >
            <option value="" disabled>
              Male
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <button
            type="submit"
            className="lg:w-28 sm:col-span-2 py-2 md:py-3 bg-black text-white font-bold rounded-md hover:bg-white hover:text-black transition-colors duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinClub;
