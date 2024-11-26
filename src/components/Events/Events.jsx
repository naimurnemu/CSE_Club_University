import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import blogImg from "../../assets/images/hero.jpg";
import { Link } from "react-router-dom";

const Events = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    fetch("https://computer-club.onrender.com/event/events/")
      .then((response) => response.json())
      .then((data) => setEventData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${blogImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      className="w-full bg-fixed bg-white"
    >
      <div className="max-w-7xl w-full mx-auto px-2 md:px-5 lg:px-0 py-24">
        <div className="px-4 space-y-5">
          {/* Title */}
          <h1 className="lg:text-xl font-semibold text-[#C3E92D]">
            RUNNING EVENTS
          </h1>
          <div className="flex justify-between items-center">
            <h2 className="text-xl lg:text-4xl lg:font-bold font-semibold text-white">
              RUNNING EVENTS COMING UP INCLUDE
            </h2>
            <Link to="/allEvents">
              <button className="lg:text-2xl text-sm font-bold text-white items-center hover:text-[#C3E92D] transition-colors duration-500 ease-in-out">
                VIEW ALL
              </button>
            </Link>
          </div>

          {/* Event Card */}
          <div className="grid grid-cols-1 gap-6 lg:min-h-screen pt-10">
            {eventData.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="bg-white overflow-hidden grid lg:grid-cols-3 "
              >
                {/* Event Info */}
                <div className="flex items-center">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {item.name}
                    </h3>
                    <ul className="space-y-4 font-bold">
                      <li className="flex items-center text-gray-700">
                        <FaMapMarkerAlt className="text-[#C3E92D] mr-3" />
                        {item.location}
                      </li>
                      <li className="flex items-center text-gray-700">
                        <FaCalendarAlt className="text-[#C3E92D] mr-3" />
                        {item.start_date}
                      </li>
                      <li className="flex items-center text-gray-700">
                        <FaClock className="text-[#C3E92D] mr-3" />
                        Start {item.start_time} - Until Finish
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Event Image */}
                <div className="relative group overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Ticket Info */}
                <div className="bg-gray-50 p-6 flex flex-col justify-center items-start">
                  {/* Ticket Label */}
                  <p className="text-lg font-semibold text-[#C3E92D] mb-1 text-start">
                    Ticket
                  </p>

                  {/* Price Section */}
                  <div className="flex items-baseline text-start">
                    <p className="text-5xl font-extrabold text-gray-900">
                      FREE
                    </p>
                    <span className="text-sm text-gray-500 ml-1 self-baseline">
                      /ticket
                    </span>
                  </div>

                  {/* Button */}
                  <Link to={`/eventDetails/${item.id}`}>
                    <button className="mt-4 px-6 py-2 lg:py-4 bg-[#C3E92D] text-black hover:bg-black hover:text-white font-bold rounded-md text-start">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Events;
