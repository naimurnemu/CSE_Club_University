import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const EventDetails = () => {
  const { id } = useParams();
  const [mentorDetails, setMentorDetails] = useState(null);

  useEffect(() => {
    fetch(`https://computer-club.onrender.com/mentor/mentors/${id}/`)
      .then((response) => response.json())
      .then((data) => setMentorDetails(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, [id]);

  if (!mentorDetails) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-screen-xl mx-auto p-6 md:flex md:items-center md:space-x-8">
        {/* Mentor's Info */}
        <div className="md:w-1/2 space-y-4 text-start">
          <h1 className="text-3xl font-bold text-gray-800">
            {mentorDetails.name}
          </h1>
          <p className="text-xl text-gray-600 font-semibold">
            {mentorDetails.designation}
          </p>
          <p className="text-gray-700">
            <strong>Expertise:</strong> {mentorDetails.expertise}
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> {mentorDetails.email}
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> {mentorDetails.phone}
          </p>
          <p className="text-gray-700">
            <strong>Bio:</strong> {mentorDetails.bio}
          </p>
          {/* LinkedIn Icon */}
          <a
            href={mentorDetails.linkedIn_id}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 font-bold hover:underline"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn Profile
          </a>
        </div>

        {/* Mentor's Photo */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src={mentorDetails.photo}
            alt={`${mentorDetails.name} Photo`}
            className="rounded-lg shadow-md max-w-full lg:h-[300px] w-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
