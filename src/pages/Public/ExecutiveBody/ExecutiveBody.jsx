import React, { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ExecutiveBody = () => {
  const [participants, setParticipants] = useState([]);
  const location = useLocation();

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
        // Select the candidate with the highest vote count for President/General Secretary
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
      <div key={designation} className="my-10 w-full">
        <h2 className="text-center font-bold text-2xl md:text-3xl text-teal-400 mb-6">
          {designation}
        </h2>
        <div className="max-w-7xl mx-auto px-3 md:px-5 w-full">
          {designationParticipants.map((participant, index) => (
            <div
              key={`${participant.name}-${index}`}
              className="bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105"
            >
              {/* Photo */}
              <div className="relative">
                <img
                  src={participant.photo || "https://via.placeholder.com/150"}
                  alt={participant.name}
                  className="w-32 h-32 rounded-full border-4 border-teal-400 object-cover"
                />
                {participant.linkedIn && (
                  <a
                    href={participant.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 bg-teal-400 p-2 rounded-full text-black hover:bg-teal-500"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
              </div>
              <h3 className="text-xl font-semibold mt-4">{participant.name}</h3>
              <p className="text-gray-400 italic">{participant.designation}</p>
              <div className="mt-4 text-sm space-y-2">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${participant.email}`}
                    className="text-teal-400 hover:underline"
                  >
                    {participant.email}
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href={`tel:${participant.phone}`}
                    className="text-teal-400 hover:underline"
                  >
                    {participant.phone}
                  </a>
                </p>
              </div>
              <p className="text-gray-300 mt-4 text-center">
                {participant.description || "No description provided."}
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
    <div className="bg-gray-900 min-h-screen py-10 px-4">
      <div className="mx-auto max-w-screen-sm">
        {location.pathname === "/executives" && (
          <h1 className="text-center text-4xl font-bold text-teal-400 mb-12">
            Meet Our Executive Body
          </h1>
        )}
        {uniqueDesignations.map((designation) => renderCards(designation))}
      </div>
    </div>
  );
};

export default ExecutiveBody;
