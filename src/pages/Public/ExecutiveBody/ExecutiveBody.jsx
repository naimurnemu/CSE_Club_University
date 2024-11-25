import React, { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";

const ExecutiveBody = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    fetch("https://computer-club.onrender.com/executive/executives/")
      .then((response) => response.json())
      .then((data) => {
        setParticipants(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to process and filter participants by designation
  const getFilteredParticipants = () => {
    const filteredParticipants = [];
    const groupedByDesignation = participants.reduce((acc, participant) => {
      const { designation } = participant;
      if (!acc[designation]) acc[designation] = [];
      acc[designation].push(participant);
      return acc;
    }, {});

    for (const [designation, candidates] of Object.entries(
      groupedByDesignation
    )) {
      if (designation === "President" || designation === "General Secretary") {
        // Select the candidate with the highest vote count for President
        const maxVoteCandidate = candidates.reduce((max, candidate) =>
          candidate.vote_count > max.vote_count ? candidate : max
        );
        filteredParticipants.push({ ...maxVoteCandidate, designation });
      } else {
        // Select up to 2 candidates for other roles
        const limitedCandidates = candidates.slice(0, 2);
        filteredParticipants.push(...limitedCandidates);
      }
    }

    return filteredParticipants;
  };

  // Render cards for each role
  const renderCards = (designation) => {
    const designationParticipants = getFilteredParticipants().filter(
      (p) => p.designation === designation
    );

    return (
      <div key={designation} className="mb-10 mt-10">
        <h2 className="text-center font-bold text-2xl md:text-3xl mb-6">
          {designation}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designationParticipants.map((participant, index) => (
            <div
              key={`${participant.name}-${index}`}
              className="border border-blue-900 bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between items-center px-4 py-6 h-full w-full max-w-[250px] mx-auto"
            >
              {/* Photo */}
              <div className="flex justify-end items-top">
                <img
                  src={participant.photo || "https://via.placeholder.com/150"}
                  alt={participant.name}
                  className="w-36 h-36 rounded-full mb-4 object-cover"
                />
                <a
                  href={participant.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute text-blue-500 hover:underline text-2xl mt-[120px] mr-12 bg-white rounded-full p-2"
                >
                  <FaLinkedin />
                </a>
              </div>
              <h3 className="text-lg md:text-2xl font-semibold text-center mb-2 text-gray-800">
                {participant.name}
              </h3>
              <div className="flex flex-col items-start">
                <p className="text-gray-600 text-sm break-all mb-1">
                  <b>Email:</b>{" "}
                  <a href={`mailto:${participant.email}`}>
                    {participant.email}
                  </a>
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  <b>Phone:</b>{" "}
                  <a href={`tel:${participant.phone}`}>{participant.phone}</a>
                </p>
              </div>
              <p className="text-gray-600 text-center text-sm">
                {participant.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const uniqueDesignations = [
    ...new Set(participants.map((p) => p.designation)),
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {uniqueDesignations.map((designation) => renderCards(designation))}
    </div>
  );
};

export default ExecutiveBody;
