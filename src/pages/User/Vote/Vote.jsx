import React, { useEffect, useState } from "react";
import { VotingTimerBreaker } from "../../../components/VotingTimerBreaker";

const Vote = () => {
  const [participants, setParticipants] = useState({});
  const [votes, setVotes] = useState({});
  const [isOpenVote, setIsOpenVote] = useState(true);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token"); // Fetch token from localStorage
  const API_URL = "https://computer-club.onrender.com/vote/votes/";
  const endDate = new Date("2024-12-31T23:59:59");
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Fallback data if API doesn't return a response
  const fallbackData = {
    President: [
      {
        id: 1,
        candidate: "candidate_1",
        candidate_name: "John Doe",
        photo: "https://via.placeholder.com/150",
        description: "An experienced leader with a vision for progress.",
      },
      {
        id: 2,
        candidate: "candidate_2",
        candidate_name: "Jane Smith",
        photo: "https://via.placeholder.com/150",
        description: "Committed to fostering collaboration and growth.",
      },
    ],
    Secretary: [
      {
        id: 3,
        candidate: "candidate_3",
        candidate_name: "Alice Johnson",
        photo: "https://via.placeholder.com/150",
        description: "Dedicated to excellence in organizational management.",
      },
      {
        id: 4,
        candidate: "candidate_4",
        candidate_name: "Bob Williams",
        photo: "https://via.placeholder.com/150",
        description: "Passionate about improving communication and efficiency.",
      },
    ],
  };

  // Fetch participants data dynamically from API
  const fetchParticipants = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`, // Use the token for API authorization
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch participants");
      }

      const data = await response.json();
      const groupedData = data.reduce((acc, item) => {
        acc[item.position] = acc[item.position] || [];
        acc[item.position].push(item);
        return acc;
      }, {});
      setParticipants(groupedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching participants:", error);
      // Use fallback data if the API call fails
      setParticipants(fallbackData);
      setLoading(false);
    }
  };

  const calculateTimeLeft = () => {
    const difference = new Date(endDate) - new Date();
    if (difference > 0) {
      return {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    } else {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handle voting for a candidate
  const handleVote = async (position, candidateId) => {
    try {
      // Submit vote to the API
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          position,
          candidate: candidateId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to vote");
      }

      // Update local votes state
      setVotes((prevVotes) => ({
        ...prevVotes,
        [position]: candidateId,
      }));
    } catch (error) {
      console.error("Error while voting:", error);
    }
  };

  useEffect(() => {
    fetchParticipants();
  }, []);

  const renderCards = (position) => {
    const candidates = participants[position] || [];
    const votedCandidateId = votes[position]; // Current vote for this position

    return (
      <div className="mb-10">
        <h2 className="font-medium  text-2xl md:text-3xl mb-6 text-white">
          {position}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="border border-gray-700 bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between items-center py-6 px-4 h-full transition-transform hover:scale-105"
            >
              {/* Image */}
              <img
                src={candidate.photo || "https://via.placeholder.com/150"}
                alt={candidate.candidate_name}
                className="w-32 h-32 rounded-full mb-4"
              />
              {/* Name */}
              <h3 className="text-lg font-semibold text-center mb-2 text-white">
                {candidate.candidate_name}
              </h3>
              {/* Description */}
              <p className="text-sm text-gray-400 text-center mb-4 flex-grow">
                {candidate.description || "No description available."}
              </p>
              {/* Vote Button */}
              <button
                onClick={() => handleVote(position, candidate.candidate)}
                disabled={votedCandidateId === candidate.candidate}
                className={`font-semibold py-2 px-4 text-sm rounded w-full ${
                  votedCandidateId === candidate.candidate
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-700 text-white"
                }`}
              >
                {votedCandidateId === candidate.candidate ? "Voted" : "Vote"}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-900 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {isOpenVote ? (
          <div>
            <div>
              <p className="pt-[20px] md:pt-[30px] text-center text-[#FFF] font-['Poppins'] text-[24px] md:text-[40px] font-normal mb-[29px] md:mb-10">
                Vote ends in ...
              </p>
              <div className="md:px-[120px] mb-[30px] md:mb-[60px]">
                <div className="z-0 flex flex-col md:flex-row items-center justify-center gap-8 ">
                  <div className="z-0 relative">
                    <div className="bg-[#F95050] rounded-[13px] w-[214px] h-[90px] "></div>
                    <div className="ml-[-12px] mt-[-8px] z-40">
                      <VotingTimerBreaker />
                    </div>
                    <div className="bg-[#F95050] rounded-[13px] w-[214px] h-[90px] mt-[-8px]"></div>
                    <div className="z-1 absolute top-[-62px] left-2 text-[#F2F2F2] text-[182px] font-normal text-center font-['Share Tech']">
                      {timeLeft?.days}
                    </div>
                    <p className="text-[23px] font-normal font-['Poppins'] text-[#FFF] text-center pt-[13px]">
                      Days
                    </p>
                  </div>
                  <div className="z-0 relative">
                    <div className="bg-[#F95050] rounded-[13px] w-[214px] h-[90px] "></div>
                    <div className="ml-[-12px] mt-[-8px] z-40">
                      <VotingTimerBreaker />
                    </div>
                    <div className="bg-[#F95050] rounded-[13px] w-[214px] h-[90px] mt-[-8px]"></div>
                    <div className="z-1 absolute top-[-62px] left-2 text-[#F2F2F2] text-[182px] font-normal text-center font-['Share Tech']">
                      {timeLeft?.minutes}
                    </div>
                    <p className="text-[23px] font-normal font-['Poppins'] text-[#FFF] text-center pt-[13px]">
                      Hours
                    </p>
                  </div>
                  <div className="relative">
                    <div className="z-0 bg-[#F95050] rounded-[13px] w-[214px] h-[90px] "></div>
                    <div className="ml-[-12px] mt-[-8px] z-40">
                      <VotingTimerBreaker />
                    </div>
                    <div className="bg-[#F95050] rounded-[13px] w-[214px] h-[90px] mt-[-8px]"></div>
                    <div className="z-1 absolute top-[-62px] left-2 text-[#F2F2F2] text-[182px] font-normal text-center font-['Share Tech']">
                      {timeLeft?.hours}
                    </div>
                    <p className="text-[23px] font-normal font-['Poppins'] text-[#FFF] text-center pt-[13px]">
                      Minutes
                    </p>
                  </div>
                  <div className="z-0 relative">
                    <div className="bg-[#F95050] rounded-[13px] w-[214px] h-[90px] "></div>
                    <div className="ml-[-12px] mt-[-8px] z-40">
                      <VotingTimerBreaker />
                    </div>
                    <div className="bg-[#F95050] rounded-[13px] w-[214px] h-[90px] mt-[-8px]"></div>
                    <div className="z-1 absolute top-[-62px] left-2 text-[#F2F2F2] text-[182px] font-normal text-center font-['Share Tech']">
                      {timeLeft?.seconds}
                    </div>
                    <p className="text-[23px] font-normal font-['Poppins'] text-[#FFF] text-center pt-[13px]">
                      Seconds
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="pt-8 text-center text-white font-['Poppins'] text-lg font-normal mb-10">
              Click on "View All Candidates" to start voting!
            </p>
            <div className="flex justify-center items-center mb-10">
              <button
                onClick={() => setIsOpenVote(false)}
                className="bg-green-500 font-semibold lg:py-3 lg:px-4 py-2 px-3 hover:bg-green-700 text-white rounded"
              >
                View All Candidates
              </button>
            </div>
          </div>
        ) : loading ? (
          <p className="text-center text-white">Loading participants...</p>
        ) : (
          <div>
            <p className="pt-[20px] md:pt-[30px] text-center text-[#FFF] font-['Poppins'] text-[24px] md:text-[40px] font-normal mb-[29px] md:mb-10">
              All Candidates
            </p>
            {/* Grid View for Participants */}
            <div className="mt-8">
              {Object.keys(participants).map((position) =>
                renderCards(position)
              )}
            </div>
            <div className="flex justify-center items-center mb-10">
              <button
                onClick={() => setIsOpenVote(true)}
                className="bg-green-500 font-semibold lg:py-3 lg:px-4 py-2 px-3 hover:bg-green-700 text-white rounded"
              >
                View Vote Timer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Vote;
