import React from "react";
import { useLocation } from "react-router-dom";

const WinnerPage = () => {
  const location = useLocation();
  const winners = location.state?.winners || [];

  return (
    <div className="bg-gray-900 min-h-screen py-8 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-10">
          Election Winners
        </h1>
        {winners.map((positionData, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="font-medium text-2xl md:text-3xl mb-6">
              {positionData.position}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {positionData.candidates.map((candidate, index) => (
                <div
                  key={index}
                  className="border border-green-500 bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between items-center py-6 px-4 transition-transform hover:scale-105"
                >
                  <div className="relative mb-4">
                    <img
                      src="https://img.freepik.com/premium-vector/election-day-icon-clipart-avatar-logotype-isolated-vector-illustration_955346-569.jpg"
                      alt={candidate.full_name}
                      className="w-32 h-32 rounded-full border-4 border-green-500 object-cover"
                    />
                    <span className="absolute bottom-[-10px] right-[43px] bg-green-500 px-4 py-2 rounded-full text-white hover:bg-teal-500">
                      {candidate.votes}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">
                    {candidate.full_name}
                  </h3>
                  <p className="text-sm text-gray-400 text-center mb-4">
                    {candidate.manifesto || "No description available."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinnerPage;
