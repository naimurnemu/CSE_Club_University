import banner from "../../assets/images/bannerBG.jpg";
import sidePhoto from "../../assets/images/images.png";
import { FaCalendar, FaMapMarkerAlt, FaStopwatch } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="mx-auto flex flex-col pt-10 lg:p-20 min-h-screen lg:flex-row-reverse items-center gap-6 space-y-4  lg:py-12 "
    >
        {/* New Event Card */}
        <div className="card bg-black/50 lg:w-96 shadow-xl relative">
          <div
            style={{ borderRadius: "10px 10px 0px 0px" }}
            className="absolute bg-[#C3E92D] top-4 left-8"
          >
            <h1 className="font-semibold text-black px-3 py-1">NEW EVENT</h1>
          </div>
          <figure className="pt-12">
            <img
              className="w-full px-8"
              style={{ borderRadius: "0px 10px 10px 10px" }}
              src={sidePhoto}
              alt=""
            />
          </figure>
          <div className="text-white pl-8 space-y-2">
            <h1 className="lg:text-2xl text-xl font-medium py-3">
              Computer Programming
            </h1>
            <p className="flex items-center lg:font-medium gap-2">
              <FaCalendar className="text-[#C3E92D]"></FaCalendar> OCT 20, 2024
            </p>
            <p className="flex items-center lg:font-medium gap-2">
              <FaStopwatch className="text-[#C3E92D]"></FaStopwatch> START 6:00
              AM - UNTIL FINISH
            </p>
            <p className="flex items-center lg:font-medium gap-2 pb-4">
              <FaMapMarkerAlt className="text-[#C3E92D]"></FaMapMarkerAlt> START
              6:00 AM - UNTIL FINISH
            </p>
          </div>
        </div>

        {/* City University Computer Club Info */}
        <div className="lg:w-3/5 space-y-5 flex flex-col lg:flex-none">
          <h1 className="font-bold lg:text-7xl text-3xl text-white">
            City University Computer Club
          </h1>
          <p className="lg:text-xl text-white">
            A community for tech enthusiasts from City University, where we
            explore the latest advancements in computer science and technology.
          </p>
          <div className="space-x-3">
            <button className="bg-[#C3E92D] font-semibold lg:py-3 lg:px-4 py-2 px-3 hover:bg-black hover:text-white text-black rounded-sm">
              Join The Club
            </button>
            <button className="text-[#127CC1] font-semibold  bg-white lg:py-3 lg:px-4 py-2 px-3 rounded-sm">
              Learn More
            </button>
          </div>
        </div>
    </div>
  );
};

export default Banner;
