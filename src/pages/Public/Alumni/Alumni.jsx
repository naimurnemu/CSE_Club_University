import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const Alumni = () => {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    fetch("https://computer-club.onrender.com/alumni/alumni/")
      .then((res) => res.json())
      .then((data) => setAlumni(data))
      .catch((error) => console.error("Error fetching alumni data:", error));
  }, []);

  return (
    <div className="w-full">
      <div className="py-8 max-w-7xl mx-auto px-3 md:px-5">
        <h2 className="lg:text-4xl text-2xl  font-bold mb-6 text-white text-center">
          Alumni Directory
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {alumni.map((person) => (
            <div
              key={person.id}
              className="bg-white p-4 shadow-md rounded-lg flex items-center gap-4 lg:flex-row flex-col"
            >
              <div className="bg-gray-100 p-2 rounded-md border border-gray-300">
                <img
                  className="lg:w-60 lg:h-40 object-cover rounded-md"
                  src={person.image}
                  alt="Alumni Profile"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-black">{person.name}</h3>
                <p className="text-gray-600 font-semibold">
                  {person.job_title} at{" "}
                  <span className="text-blue-500">{person.company}</span>
                </p>
                <p className="text-black">Department: {person.department}</p>
                <p className="text-gray-500 text-sm">
                  Graduation Year: {person.graduation_year}
                </p>
                <p className="text-black text-sm">{person.bio}</p>
                <a
                  href={person.linkedin_profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 font-bold hover:underline"
                >
                  <FaLinkedin className="mr-2" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
