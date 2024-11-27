import React, { useState, useEffect, useContext } from "react";
import { IoIosSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

const Chat = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { authState } = useContext(AuthContext);
  console.log("authState", authState?.user?.username);

  // Fetch Messages
  useEffect(() => {
    if (!token) return;

    const fetchMessages = async () => {
      try {
        const response = await fetch(
          "https://computer-club.onrender.com/message/messages/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        console.log("Messages Response Status:", response.status);

        if (!response.ok) {
          throw new Error(`Error fetching messages: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Fetched Messages:", data);
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
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

    const newMessage = {
      // username: authState?.user?.username,
      messages: inputMessage,
    };

    try {
      const response = await fetch(
        "https://computer-club.onrender.com/message/messages/",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(newMessage),
        }
      );

      console.log("Send Message Response Status:", response.status);

      if (!response.ok) {
        throw new Error(`Error sending message: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Message Sent:", data);
      setMessages([...messages, data]);
      setInputMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Handle Enter Key for Message Input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 h-screen ">
        {/* User List */}
        <div className="hidden lg:block col-span-1 bg-gray-800 p-4">
          <h2 className="text-center text-3xl font-bold mb-4 text-gray-100 py-3">
            All Club Members
          </h2>
          <ul className="space-y-2 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
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
              <div className="space-y-3">
                {messages.length === 0 ? (
                  <p className="text-center text-xl text-gray-400">
                    {token
                      ? "No messages yet. Be the first to send one!"
                      : "Join the club to start a conversation!"}
                  </p>
                ) : (
                  messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-2 p-2 rounded ${
                        msg.username === localStorage.getItem("name")
                          ? "bg-blue-700 text-white self-end"
                          : "bg-gray-700"
                      }`}
                    >
                      <strong className="font-semibold">{msg.username}:</strong>
                      <span>{msg.messages}</span>
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
