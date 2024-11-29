import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch("https://computer-club.onrender.com/mentor/mentors/")
      .then((response) => response.json())
      .then((data) => setTeamData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="w-full bg-gray-900 text-opacity-45">
      <div className="max-w-7xl w-full mx-auto px-2 md:px-5 lg:px-0 py-24">
        <div className="text-center space-y-4 pb-8">
          <h1 className="lg:text-5xl text-2xl text-white font-bold lg:w-3/4 mx-auto">
            OUR MENTORS
          </h1>
        </div>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {teamData.map((item) => (
            <div
              key={item.id}
              className="relative group card rounded-lg border border-gray-300 shadow-lg overflow-hidden space-y-3 p-4"
            >
              {/* Image Section */}
              <figure className="bg-gray-700">
                <img
                  className="hover:scale-105 transition-transform duration-500 lg:h-[300px]"
                  src={item.photo}
                  alt="photos"
                />
              </figure>

              {/* Name Section */}
              <h2 className="text-2xl lg:text-3xl font-semibold text-white text-center group-hover:text-[#C3E92D] transition-colors duration-300">
                {item.name}
              </h2>

              {/* Designation Section */}
              <p className="font-semibold text-center">
                {item.designation.toUpperCase()}
              </p>

              {/* View Details Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to={`/membership/${item.id}`}>
                <button className="px-6 lg:py-3 py-2 bg-[#C3E92D] text-black font-bold rounded-md hover:bg-black hover:text-white transition-colors duration-300">
                  View Details
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
