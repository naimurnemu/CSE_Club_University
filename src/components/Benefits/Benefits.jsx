import img from "../../assets/images/fixedImg.jpg";

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
                      SKILL DEVELOPMENT
                    </h1>
                    <p className="text-sm md:text-xl">
                      Enhance your programming and technical skills by working
                      on real-world projects.
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
                      NETWORKING
                    </h1>
                    <p className="text-sm md:text-xl">
                      Connect with like-minded peers and industry professionals
                      to expand your network.
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
                className="lg:rounded-[50%] w-full md:w-[50%] lg:w-[70%] lg:h-[85%]"
                src={img}
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
                    <h1 className="text-xl md:text-2xl font-semibold text-start text-white">
                      COLLABORATION
                    </h1>
                    <p className="text-sm md:text-xl text-start">
                      Work in teams on innovative projects and build solutions
                      for real-world problems.
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
                    <h1 className="text-xl md:text-2xl font-semibold text-start text-white">
                      LEADERSHIP OPPORTUNITIES
                    </h1>
                    <p className="text-sm md:text-xl text-start">
                      Take on leadership roles and organize events to enhance
                      your management skills.
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
