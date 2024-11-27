import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img from "../../../assets/images/fixedImg.jpg";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const EventDetails = () => {
  const { id } = useParams();
  const [eventDetails, setEventDetails] = useState([]);

  useEffect(() => {
    fetch(`https://computer-club.onrender.com/event/events/${id}/`)
      .then((response) => response.json())
      .then((data) => setEventDetails(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, [id]);

  if (!eventDetails) {
    return <p>Loading...</p>;
  }
  return (
    <div className="w-full">
      <div className="flex lg:flex-row flex-col max-w-screen-xl mx-auto px-4">
        <div className="lg:w-1/2">
          <img className="min-h-screen" src={img} alt="" />
        </div>
        <div className="bg-black lg:pl-8 pl-4 lg:w-1/2 flex items-center">
          <div className="p-6 flex flex-col justify-center items-start">
            {/* Ticket Label */}
            <p className="lg:text-3xl text-xl font-semibold lg:font-bold text-[#C3E92D] mb-1 text-start">
              Ticket
            </p>

            {/* Price Section */}
            <div className="flex items-baseline text-start">
              <p className="text-5xl font-extrabold text-white">FREE</p>
              <span className="text-sm text-gray-300 ml-1 self-baseline">
                /ticket
              </span>
            </div>

            <h1 className="text-2xl lg:text-4xl font-bold text-white pt-4 lg:pt-6">
              {eventDetails.name}
            </h1>

            <div className="flex items-center text-start">
              <div className="text-start lg:py-8 py-4">
                <ul className="space-y-4 font-bold text-start text-white">
                  <li className="flex items-center">
                    <FaMapMarkerAlt className="text-[#C3E92D] mr-3" />
                    <span className="text-start">{eventDetails.location}</span>
                  </li>
                  <li className="flex items-center">
                    <FaCalendarAlt className="text-[#C3E92D] mr-3" />
                    <span className="text-start">
                      {eventDetails.start_date}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FaClock className="text-[#C3E92D] mr-3" />
                    <span className="text-start">
                      Start {eventDetails.start_time} - Until Finish
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <button className="mt-6 mb-6 px-6 lg:px-8 py-2 lg:py-4 bg-[#C3E92D] text-black hover:bg-black hover:text-white font-bold rounded-md text-start">
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
