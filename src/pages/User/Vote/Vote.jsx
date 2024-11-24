import React, { useEffect, useState } from "react";
import { VotingTimerBreaker } from "../../../components/VotingTimerBreaker";

const Vote = () => {
  const endDate = new Date("2024-12-31T23:59:59");
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [isOpenVote, setIsOpenVote] = useState(true);

  const participants = [
    {
      name: "Alice Johnson",
      description:
        "Focused on inclusivity and progress. Focused on inclusivity and progress. Focused on inclusivity and progress. Focused on inclusivity and progress.",
      photo: "https://via.placeholder.com/150",
      role: "President",
    },
    {
      name: "Alice Johnson",
      description:
        "Focused on inclusivity and progress. Focused on inclusivity and progress. Focused on inclusivity and progress. Focused on inclusivity and progress.",
      photo: "https://via.placeholder.com/150",
      role: "President",
    },
    {
      name: "Alice Johnson",
      description:
        "Focused on inclusivity and progress. Focused on inclusivity and progress. Focused on inclusivity and progress. Focused on inclusivity and progress.",
      photo: "https://via.placeholder.com/150",
      role: "President",
    },
    {
      name: "Alice Johnson",
      description:
        "Focused on inclusivity and progress. Focused on inclusivity and progress. Focused on inclusivity and progress. Focused on inclusivity and progress.",
      photo: "https://via.placeholder.com/150",
      role: "President",
    },
    {
      name: "Bob Smith",
      description: "Committed to transparency and leadership.",
      photo: "https://via.placeholder.com/150",
      role: "President",
    },
    {
      name: "Carol Davis",
      description: "Visionary ideas for a better future.",
      photo: "https://via.placeholder.com/150",
      role: "Vice President",
    },
    {
      name: "Dan Brown",
      description: "Prioritizing community and growth.",
      photo: "https://via.placeholder.com/150",
      role: "Vice President",
    },
    {
      name: "Eva Green",
      description: "Driven by innovation and teamwork.",
      photo: "https://via.placeholder.com/150",
      role: "Treasurer",
    },
    {
      name: "Frank White",
      description: "Dedicated to effective resource management.",
      photo: "https://via.placeholder.com/150",
      role: "Treasurer",
    },
    {
      name: "Grace Kim",
      description: "Focused on impactful communication.",
      photo: "https://via.placeholder.com/150",
      role: "Secretary",
    },
    {
      name: "Harry Lee",
      description: "Championing transparency and efficiency.",
      photo: "https://via.placeholder.com/150",
      role: "Secretary",
    },
    {
      name: "Ivy Walker",
      description: "Committed to creative initiatives.",
      photo: "https://via.placeholder.com/150",
      role: "Organizer",
    },
    {
      name: "Jack Young",
      description: "Dedicated to event excellence.",
      photo: "https://via.placeholder.com/150",
      role: "Organizer",
    },
  ];

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

  const groupedParticipants = participants.reduce((acc, participant) => {
    acc[participant.role] = acc[participant.role] || [];
    acc[participant.role].push(participant);
    return acc;
  }, {});

  const renderCards = (role) => {
    return (
      <div className="mb-10">
        <h2 className="text-center font-bold text-xl mb-6">{role}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {groupedParticipants[role].map((participant) => (
            <div
              key={participant.name}
              className="border border-gray-200 bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between items-center p-6 h-full"
            >
              {/* Image */}
              <img
                src={participant.photo}
                alt={participant.name}
                className="w-40 h-40 rounded-full mb-4"
              />
              {/* Name */}
              <h3 className="text-lg font-semibold text-center mb-2">
                {participant.name}
              </h3>
              {/* Description */}
              <p className="text-sm text-gray-600 text-center mb-4 flex-grow">
                {participant.description}
              </p>
              {/* Vote Button */}
              <button className="bg-[#C3E92D] font-semibold lg:px-6 py-2 px-4 text-sm hover:bg-black hover:text-white text-black rounded w-full">
                Vote
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4">
        {isOpenVote ? (
          <div>
            <p className="pt-[80px] md:pt-[120px] text-center text-[#000] font-['Poppins'] text-[19px] font-normal mb-[29px] md:mb-10">
              Vote ends in ...
            </p>
            <div className="md:px-[120px] mb-[120px]">
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
                  <p className="text-[23px] font-normal font-['Poppins'] text-[#000] text-center pt-[13px]">
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
                  <p className="text-[23px] font-normal font-['Poppins'] text-[#000] text-center pt-[13px]">
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
                  <p className="text-[23px] font-normal font-['Poppins'] text-[#000] text-center pt-[13px]">
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
                  <p className="text-[23px] font-normal font-['Poppins'] text-[#000] text-center pt-[13px]">
                    Seconds
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mb-10">
              <button
                onClick={() => setIsOpenVote(false)}
                className="bg-[#C3E92D] font-semibold lg:py-3 lg:px-4 py-2 px-3 hover:bg-black hover:text-white text-black rounded"
              >
                View All Candidates
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="pt-[80px] md:pt-[120px] text-center text-[#000] font-['Poppins'] text-[19px] font-normal mb-[29px] md:mb-10">
              All Candidates
            </p>
            {/* New Feature: Grid View for Participants */}
            <div className="mt-8">
              {Object.keys(groupedParticipants).map((role) =>
                renderCards(role)
              )}
            </div>
            <div className="flex justify-center items-center mb-10">
              <button
                onClick={() => setIsOpenVote(true)}
                className="bg-[#C3E92D] font-semibold lg:py-3 lg:px-4 py-2 px-3 hover:bg-black hover:text-white text-black rounded"
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
