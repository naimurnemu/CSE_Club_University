import { Link } from "react-router-dom";
import banner from "../../assets/images/img1.jpg";
import sidePhoto from "../../assets/images/b2.jpg";
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
      className="lg:pl-10 rounded-md relative"
    >
      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-md"></div>
      <div className="w-full max-w-7xl px-4 md:px-6 lg:px-2 mx-auto flex flex-col-reverse lg:p-24 lg:min-h-[600px]  lg:flex-row justify-between items-center gap-8 space-y-4 lg:py-16 relative">
        <div className="lg:w-1/2 space-y-5 flex flex-col lg:flex-none">
          <h1 className="font-bold lg:text-7xl text-3xl text-white">
            City University Computer Club
          </h1>
          <p className="lg:text-xl text-white">
            A community for tech enthusiasts from City University, where we
            explore the latest advancements in computer science and technology.
          </p>
          <div className="space-x-3">
            <Link to="/register">
              <button className="bg-[#C3E92D] font-semibold lg:py-4 lg:px-14 py-2 px-3 hover:bg-[#22C55E] hover:text-white text-black rounded-sm">
                Join The Club
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-black/40 shadow-2xl lg:w-96 rounded-lg overflow-hidden flex flex-col items-center mx-auto relative">
          <figure className="pt-10">
            <img
              className="w-full h-48 rounded-md object-cover"
              src={sidePhoto}
              alt="Event"
            />

            <h1 style={{borderRadius:"100px 100px 100px 0px" }} className="font-semibold p-1 lg:w-1/3 bg-[#C3E92D] absolute top-2 text-black text-center">NEW EVENT</h1>
          </figure>
          <div className="text-white p-5 space-y-2">
            <h1 className="lg:text-2xl text-xl font-medium">
              Computer Programming
            </h1>
            <p className="flex items-center lg:font-medium gap-2">
              <FaCalendar className="text-[#C3E92D]" /> OCT 20, 2024
            </p>
            <p className="flex items-center lg:font-medium gap-2">
              <FaStopwatch className="text-[#C3E92D]" /> START 6:00 AM - UNTIL
              FINISH
            </p>
            <p className="flex items-center lg:font-medium gap-2">
              <FaMapMarkerAlt className="text-[#C3E92D]" /> LOCATION DETAILS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
