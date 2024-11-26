import React from "react";
import blogImg from "../../assets/images/blogImg.jpeg";

const RunningCommunity = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl w-full mx-auto px-2 md:px-5 lg:px-0 flex flex-col lg:flex-row py-24">
        <div className="flex-1 flex gap-3">
          <img
            src={blogImg}
            alt="Running"
            className="h-60 sm:h-72 md:h-80 transform rotate-3 rounded-lg shadow-lg"
          />
          {/* <img
            src={blogImg}
            alt="Running"
            className="h-60 sm:h-72 md:h-96 transform rotate-3 rounded-lg shadow-lg"
          /> */}
        </div>


        <div className="text-left space-y-4 mt-3 w-1/2">
          <h5 className="text-gray-500 font-bold">WELCOME TO RUNCLUB!</h5>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">
            ZUNZO - YOUR ULTIMATE RUNNING COMMUNITY
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Welcome to our vibrant running community, where we organize exciting
            running events, provide helpful running tutorials, and keep you
            informed with the latest running news.
          </p>
          <div className="w-full border-b-[2px] border-[#C3E92D]"></div>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <button className="bg-[#C3E92D] hover:bg-black hover:text-[#C3E92D] text-black font-medium py-2 px-4 sm:px-6 lg:py-3 rounded-md">
              FIND OUT MORE
            </button>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-12 sm:w-14 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Profile"
                  />
                </div>
              </div>
              <div className="sm:text-left">
                <p className="font-medium text-gray-900 text-sm sm:text-base">
                  Chris Pad
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Co - Founder Zunzo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningCommunity;
