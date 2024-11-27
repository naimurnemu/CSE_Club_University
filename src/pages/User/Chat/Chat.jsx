import React, { useState, useEffect, useContext } from "react";
import moment from "moment"; // Import moment.js
import { IoIosSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import axios from "axios";

const Chat = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { authState } = useContext(AuthContext);

  // Fetch Messages
  useEffect(() => {
    if (!token) return;

    const fetchMessages = async () => {
      try {
        const response = await fetch(
          "https://computer-club.onrender.com/message/messages/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error fetching messages: ${response.statusText}`);
        }

        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
    const intervalId = setInterval(fetchMessages, 2000); // Call every 2 seconds

    return () => clearInterval(intervalId);
  }, [token]);

  useEffect(() => {
    fetch("https://computer-club.onrender.com/users/users/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Send Message
  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post(
        "https://computer-club.onrender.com/message/messages/",
        {
          message: inputMessage,
          sender: Number(localStorage.getItem("userId")),
        }, // Update the key to match the API's expected payload
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Ensure token is included correctly
          },
        }
      );

      console.log("Message Sent Response:", response.data);

      // Append the new message to the state
      setMessages([...messages, response.data]);
      setInputMessage(""); // Clear input field
    } catch (error) {
      console.error("Error sending message:", error);

      // Log detailed error response if available
      if (error.response) {
        console.error("Error Response Data:", error.response.data);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const groupedMessages = [];
  messages.forEach((msg, index) => {
    const lastGroup = groupedMessages[groupedMessages.length - 1];
    if (lastGroup && lastGroup.sender === msg.sender) {
      lastGroup.messages.push(msg);
    } else {
      groupedMessages.push({
        sender: msg.sender,
        senderName: msg.sender_name,
        senderImage:
          msg.sender_image ||
          "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png",
        messages: [msg],
      });
    }
  });

  return (
    <div className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 h-screen ">
        {/* User List */}
        <div className="hidden lg:block col-span-1 bg-gray-800 p-4">
          <h2 className="text-center text-3xl font-bold mb-4 text-gray-100 py-3">
            All Club Members
          </h2>
          <ul className="space-y-2 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
            {users.length === 0 ? (
              <p className="text-gray-400 text-center">No users found.</p>
            ) : (
              users.map((user) => (
                <li
                  key={user.id}
                  className={`flex items-center space-x-3 p-2 rounded cursor-pointer`}
                >
                  <img
                    src={
                      user.image ||
                      "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png"
                    }
                    alt={user.name}
                    className="w-12 h-12 rounded-full border-2 border-gray-600"
                  />
                  <div>
                    <p className="font-medium">
                      {user.first_name} {user.last_name}
                    </p>

                    <p className="font-medium">@{user.username}</p>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Chat Section */}
        <div className="col-span-3 bg-gray-900 flex flex-col justify-between">
          <h2 className="border-x-gray-800 border-y-emerald-400 border-4 rounded text-2xl text-center font-bold mb-4 text-gray-100 py-3">
            Computer Club Discussion Forums
          </h2>
          <div className="p-4">
            <div className="flex-grow overflow-y-auto">
              <div className="space-y-3 max-h-[70vh] overflow-y-auto">
                {messages.length === 0 ? (
                  <p className="text-center text-xl text-gray-400">
                    {token
                      ? "No messages yet. Be the first to send one!"
                      : "Join the club to start a conversation!"}
                  </p>
                ) : (
                  groupedMessages.map((group, index) => (
                    <div key={index} className="space-y-2 ">
                      {/* Sender Info */}
                      <div
                        className={`flex flex-col space-x-3 ${
                          group.messages[0].sender === authState?.user?.id
                            ? "justify-end items-end"
                            : "justify-start items-start"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {group.messages[0].sender === authState?.user?.id && (
                            <strong className="font-semibold">
                              {group.senderName}
                            </strong>
                          )}
                          <img
                            src={group.senderImage}
                            alt={group.senderName}
                            className="w-10 h-10 rounded-full mb-2"
                          />
                          {group.messages[0].sender !== authState?.user?.id && (
                            <strong className="font-semibold">
                              {group.senderName}
                            </strong>
                          )}
                        </div>
                        {/* Messages */}
                        {group.messages.map((msg, i) => (
                          <div
                            key={i}
                            className={`p-2 rounded mb-2 ${
                              msg.sender === authState?.user?.id
                                ? "bg-blue-700 text-white w-fit text-left" // Keep left alignment for the current user
                                : "bg-gray-700 w-fit text-left"
                            }`} // Keep left alignment for other users
                          >
                            <span>{msg.message}</span>
                          </div>
                        ))}
                        {/* Timestamp */}
                        <div
                          className={`text-gray-400 text-xs ${
                            group.messages[0].sender === authState?.user?.id
                              ? "text-right"
                              : "text-left"
                          }`}
                        >
                          {moment(
                            group.messages[group.messages.length - 1].timestamp
                          ).format("MMM Do, YYYY [at] h:mm A")}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="relative mt-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full border border-gray-700 bg-gray-800 text-gray-200 rounded-full p-3 pr-12 focus:ring-2 focus:ring-blue-500"
                placeholder="Type a message..."
              />
              <button
                onClick={token ? sendMessage : () => navigate("/login")}
                className="absolute inset-y-0 right-0 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
              >
                <IoIosSend className="w-6 h-6 transform rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
