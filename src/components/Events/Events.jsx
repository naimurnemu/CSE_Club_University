import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import event1 from "../../assets/images/event1.jpg";

const Events = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    fetch("/eventData.json")
      .then((response) => response.json())
      .then((data) => setEventData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        {/* Title */}
        <h1 className="text-xl font-semibold text-[#C3E92D]">RUNNING EVENTs</h1>
        <div className="flex justify-between">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8">
            RUNNING EVENTS COMING UP INCLUDE
          </h2>
          <button className="text-2xl font-semibold items-center hover:text-[#C3E92D] transition-colors duration-500 ease-in-out">
            VIEW ALL
          </button>
        </div>

        {/* Event Card */}
        <div className="grid grid-cols-1 gap-6 py-10">
          {eventData.map((item, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden grid lg:grid-cols-3"
            >
              {/* Event Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700">
                    <FaMapMarkerAlt className="text-[#C3E92D] mr-3" />
                    {item.location}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCalendarAlt className="text-[#C3E92D] mr-3" />
                    {item.date}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaClock className="text-[#C3E92D] mr-3" />
                    Start {item.startTime} - Until Finish
                  </li>
                </ul>
              </div>

              {/* Event Image */}
              <div className="relative group overflow-hidden">
                <img
                  src={event1}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Ticket Info */}
              <div className="bg-gray-50 p-6 flex flex-col justify-center items-center">
                <p className="text-lg font-semibold text-[#C3E92D] mb-1 text-start">
                  Ticket
                </p>
                <div className="flex items-start">
                  <p className="text-5xl font-extrabold text-gray-900">
                    {item.ticketPrice}
                  </p>
                  <span className="text-sm text-gray-500 ml-1 self-end">
                    /ticket
                  </span>
                </div>
                <button className="mt-4 px-6 py-2 lg:py-4 bg-[#C3E92D] text-black hover:bg-black hover:text-white font-bold rounded-md">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
