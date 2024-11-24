import React, { useState } from "react";

const ExecutiveBody = () => {
  // Static data to simulate API response
  const [participants] = useState([
    {
      name: "Tasnim Akter",
      photo: "https://via.placeholder.com/100",
      vote_count: 5,
      role: "President",
    },
    {
      name: "Arif Hossain",
      photo: "https://via.placeholder.com/100",
      vote_count: 4,
      role: "President",
    },
    {
      name: "Rahim Uddin",
      photo: "https://via.placeholder.com/100",
      vote_count: 3,
      role: "Vice President",
    },
    {
      name: "Sadia Rahman",
      photo: "https://via.placeholder.com/100",
      vote_count: 2,
      role: "Vice President",
    },
    {
      name: "Nusrat Jahan",
      photo: "https://via.placeholder.com/100",
      vote_count: 6,
      role: "General Secretary",
    },
    {
      name: "Nusrat Jahan",
      photo: "https://via.placeholder.com/100",
      vote_count: 7,
      role: "General Secretary",
    },
  ]);

  // Function to process and filter participants by role
  const getFilteredParticipants = () => {
    const filteredParticipants = [];
    const groupedByRole = participants.reduce((acc, participant) => {
      const { role } = participant;
      if (!acc[role]) acc[role] = [];
      acc[role].push(participant);
      return acc;
    }, {});

    for (const [role, candidates] of Object.entries(groupedByRole)) {
      if (role === "President" || role === "General Secretary") {
        // Select the candidate with the highest vote count for President
        const maxVoteCandidate = candidates.reduce((max, candidate) =>
          candidate.vote_count > max.vote_count ? candidate : max
        );
        filteredParticipants.push({ ...maxVoteCandidate, role });
      } else {
        // Select up to 2 candidates for other roles
        const limitedCandidates = candidates.slice(0, 2);
        filteredParticipants.push(...limitedCandidates);
      }
    }

    return filteredParticipants;
  };

  // Render cards for each role
  const renderCards = (role) => {
    const roleParticipants = getFilteredParticipants().filter(
      (p) => p.role === role
    );

    return (
      <div key={role} className="mb-10">
        <h2 className="text-center font-bold text-xl mb-6">{role}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {roleParticipants.map((participant, index) => (
            <div
              key={`${participant.name}-${index}`}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between items-center p-6 h-full w-full max-w-[250px] mx-auto"
            >
              {/* Photo */}
              <img
                src={participant.photo}
                alt={participant.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              {/* Name */}
              <h3 className="text-lg font-semibold text-center mb-2">
                {participant.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const uniqueRoles = [
    ...new Set(getFilteredParticipants().map((p) => p.role)),
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      {uniqueRoles.map((role) => renderCards(role))}
    </div>
  );
};

export default ExecutiveBody;
