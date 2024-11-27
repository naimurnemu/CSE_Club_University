import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VotingTimerBreaker } from "../../../components/VotingTimerBreaker";

const Vote = () => {
  const [participants, setParticipants] = useState({});
  const [votes, setVotes] = useState({});
  const [isOpenVote, setIsOpenVote] = useState(true);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token"); // Fetch token from localStorage
  const navigate = useNavigate();
  const API_URL = "https://computer-club.onrender.com/vote/votes/";
  const WINNER_API =
    "https://computer-club.onrender.com/vote/candidates/winners/";
  const endDate = new Date("2024-12-01T23:59:59");
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const fetchParticipants = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://computer-club.onrender.com/vote/candidates/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

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
    const updateTimer = () => setTimeLeft(calculateTimeLeft());
    updateTimer(); // Set immediately
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleVote = async (position, candidateId) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          position,
          candidate: candidateId,
          user: localStorage.getItem("userId"),
        }),
      });

      if (!response.ok) {
        if (response.status === 400) {
          toast.warning("You have already voted for this position!", {
            position: "top-center",
          });
        } else {
          throw new Error("Failed to vote");
        }
      } else {
        setVotes((prevVotes) => ({
          ...prevVotes,
          [position]: candidateId,
        }));
        toast.success("Vote submitted successfully!", {
          position: "top-center",
        });
        fetchParticipants();
      }
    } catch (error) {
      console.error("Error while voting:", error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
      });
    }
  };

  const handleCloseVoting = async () => {
    try {
      const response = await fetch(WINNER_API, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch winners");
      }

      const winners = await response.json();
      navigate("/winner", { state: { winners } });
    } catch (error) {
      console.error("Error fetching winners:", error);
      toast.error("Failed to fetch winner data.", { position: "top-center" });
    }
  };

  useEffect(() => {
    fetchParticipants();
  }, []);

  const renderCards = (position) => {
    const candidates = participants[position] || [];
    const votedCandidateId = votes[position];

    return (
      <div className="mb-10">
        <h2 className="font-medium  text-2xl md:text-3xl mb-6 text-white">
          {position}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="border border-green-500 bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between items-center py-6 px-4 h-full transition-transform hover:scale-105"
            >
              <div className="relative mb-4">
                <img
                  src={
                    candidate.image ||
                    "https://img.freepik.com/premium-vector/election-day-icon-clipart-avatar-logotype-isolated-vector-illustration_955346-569.jpg"
                  }
                  alt={candidate.full_name}
                  className="w-32 h-32 rounded-full border-4 border-green-500 object-cover"
                />
                <span className="absolute bottom-[-10px] right-[43px] bg-green-500 px-4 py-2 rounded-full text-white hover:bg-teal-500">
                  {candidate.votes}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-center mb-2 text-white">
                {candidate.full_name}
              </h3>
              <p className="text-sm text-gray-400 text-center mb-4 flex-grow">
                {candidate.manifesto || "No description available."}
              </p>
              <button
                onClick={() => handleVote(position, candidate.id)}
                className={`font-semibold py-2 px-4 text-sm rounded w-full bg-green-500 hover:bg-green-700 text-white`}
              >
                Vote
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-900 min-h-screen py-8">
      <ToastContainer />
      <div className="max-w-6xl mx-auto px-4">
        {isOpenVote ? (
          <div>
            <div>
              <p className="pt-[20px] md:pt-[30px] text-center text-[#FFF] font-['Poppins'] text-[24px] md:text-[40px] font-normal mb-[29px] md:mb-10">
                Vote ends in ...
              </p>
              <div className="md:px-[120px] mb-[30px] md:mb-[60px]">
                <div className="z-0 flex flex-col md:flex-row items-center justify-center gap-8 ">
                  {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
                    <div className="z-0 relative" key={idx}>
                      <div className="bg-[#F95050] rounded-[13px] w-[214px] h-[90px] "></div>
                      <div className="ml-[-12px] mt-[-8px] z-40">
                        <VotingTimerBreaker />
                      </div>
                      <div className="bg-[#F95050] rounded-[13px] w-[214px] h-[90px] mt-[-8px]"></div>
                      <div className="z-1 absolute top-[-62px] left-2 text-[#F2F2F2] text-[182px] font-normal text-center font-['Share Tech']">
                        {timeLeft[unit]}
                      </div>
                      <p className="text-[23px] font-normal font-['Poppins'] text-[#FFF] text-center pt-[13px]">
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {Object.keys(participants).map((position) => renderCards(position))}
          </div>
        ) : (
          <div>
            <p className="text-2xl text-center text-white mt-10">
              Voting has ended!
            </p>
          </div>
        )}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={handleCloseVoting}
          disabled={!isOpenVote}
          className="bg-red-500 text-white font-bold py-3 px-6 rounded hover:bg-red-700 disabled:opacity-50"
        >
          Close Voting
        </button>
      </div>
    </div>
  );
};

export default Vote;
