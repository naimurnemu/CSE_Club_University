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
   <div className="bg-gray-900">
     <div className="max-w-screen-xl py-10 mx-auto">
      <div className=" p-6 flex lg:flex-row flex-col-reverse md:space-x-8">
        {/* Mentor's Info */}
        <div className="md:w-1/2 space-y-4 text-start my-4">
          <h1 className="text-3xl font-bold text-white">
            {mentorDetails.name}
          </h1>
          <p className="text-xl text-white font-semibold">
            {mentorDetails.designation}
          </p>
          <p className="text-white">
            <strong>Expertise:</strong> {mentorDetails.expertise}
          </p>
          <p className="text-white">
            <strong>Email:</strong> {mentorDetails.email}
          </p>
          <p className="text-white">
            <strong>Phone:</strong> {mentorDetails.phone}
          </p>
          <p className="text-white">
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

        <div className="lg:w-[300px] rounded-md flex justify-center mt-6 md:mt-0 bg-gray-600">
          <img
            src={mentorDetails.photo}
            alt={`${mentorDetails.name} Photo`}
            className="rounded-lg shadow-md h-[300px] w-auto object-cover"
          />
        </div>

      </div>
     
    </div>
   </div>
  );
};

export default EventDetails;
