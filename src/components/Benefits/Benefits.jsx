import middlePhoto from "../../assets/images/cse-club.png";

const Benefits = () => {
  return (
    <div className="w-full bg-[#121212]">
      <div className="max-w-7xl w-full mx-auto px-2 md:px-5 lg:px-0 py-24">
        <div className="text-center space-y-4">
          <h1 className="text-[#C3E92D] text-xl font-semibold">
            PROGRAMMING BENEFITS
          </h1>
          <h1 className="lg:text-5xl text-2xl text-white font-bold">
            BENEFITS OF PROGRAMMING REFERENCE
          </h1>

          {/* Main Container */}
          <div className="flex flex-col lg:flex-row gap-10 w-full pt-10">
            {/* Left Section */}
            <div className="w-full lg:w-[30%] space-y-10 lg:space-y-20">
              <div>
                <div className="flex items-center gap-4">
                  <div className="border-r-2 border-[#C3E92D] text-end pr-2">
                    <h1 className="text-xl md:text-2xl font-semibold text-white">
                      BE HEALTHY
                    </h1>
                    <p className="text-sm md:text-xl">
                      Improve your physical fitness and well-being through
                      regular running.
                    </p>
                  </div>
                  <p className="text-4xl md:text-7xl font-bold text-[#C3E92D]">
                    01
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4">
                  <div className="border-r-2 border-[#C3E92D] text-end pr-2">
                    <h1 className="text-xl md:text-2xl font-semibold text-white">
                      BE HEALTHY
                    </h1>
                    <p className="text-sm md:text-xl">
                      Improve your physical fitness and well-being through
                      regular running.
                    </p>
                  </div>
                  <p className="text-4xl md:text-7xl font-bold text-[#C3E92D]">
                    02
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Section */}
            <div className="rounded-[50%] w-full lg:w-[40%] flex justify-center">
              <img
                className="rounded-[50%] w-[70%] md:w-[50%] lg:w-[70%]"
                src={middlePhoto}
                alt="Programming Benefits"
              />
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-[30%] space-y-10 lg:space-y-20">
              <div>
                <div className="flex items-center gap-4">
                  <p className="text-4xl md:text-7xl font-bold text-[#C3E92D]">
                    03
                  </p>
                  <div className="border-l-2 border-[#C3E92D] pl-2">
                    <h1 className="text-xl md:text-2xl font-semibold text-white">
                      BE HEALTHY
                    </h1>
                    <p className="text-sm md:text-xl">
                      Improve your physical fitness and well-being through
                      regular running.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4">
                  <p className="text-4xl md:text-7xl font-bold text-[#C3E92D]">
                    04
                  </p>
                  <div className="border-l-2 border-[#C3E92D] pl-2">
                    <h1 className="text-xl md:text-2xl font-semibold text-white">
                      BE HEALTHY
                    </h1>
                    <p className="text-sm md:text-xl">
                      Improve your physical fitness and well-being through
                      regular running.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
