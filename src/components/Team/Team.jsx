import React, { useState, useEffect } from "react";
import { FaTag, FaComments } from "react-icons/fa";
import banner from "../../assets/images/joinClubImg.jpg";

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch("/teamData.json")
      .then((response) => response.json())
      .then((data) => setTeamData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="py-10 bg-white px-6">
         <div className="text-center space-y-4 pb-8">
            <h1 className="text-black text-opacity-50 text-xl font-semibold">OUR TEAM</h1>
            <h1 className="lg:text-5xl text-2xl text-black font-bold lg:w-3/4 mx-auto">OUR MEMBER, COUCH</h1>
            </div>
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-4  gap-6">
        {teamData.map((item, index) => (
          <div key={index} className="card rounded-none overflow-hidden space-y-3">
            <figure>
              <img
                className="hover:scale-105 transition-transform duration-500 lg:h-[300px]"
                src={banner}
                alt="photos"
              />
            </figure>

            <h2 className="text-2xl lg:text-3xl font-semibold text-black hover:text-[#C3E92D]">
              {item.title}
            </h2>

            <p className="font-semibold">{item.status.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
