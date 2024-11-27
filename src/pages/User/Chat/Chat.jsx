import React, { useState, useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      fetch("http://computer-club.onrender.com/users/users/", {
        headers: {
          Authorization: `Token ${token}`,
        },
        method: "GET",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error fetching users: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => setUsers(data))
        .catch((error) => console.error(error));

      fetch("https://computer-club.onrender.com/message/messages/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error fetching messages: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => setMessages(data))
        .catch((error) => console.error(error));
    }
  }, [token]);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    if (!token) {
      navigate("/login");
      return;
    }

    const newMessage = {
      username: localStorage.getItem("name"),
      messages: inputMessage,
    };

    fetch("https://computer-club.onrender.com/message/messages/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(newMessage),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error sending message: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setMessages([...messages, data]);
        setInputMessage("");
      })
      .catch((error) => console.error("Error sending message:", error));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 h-screen bg-gray-900 text-gray-200">
      {/* User List */}
      <div className="hidden lg:block col-span-1 bg-gray-800 p-4">
        <h2 className="text-center text-3xl md:text-3xl font-bold mb-4 text-gray-100 py-3 md:py-8">All Club Members</h2>
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user.id}
              className={`flex items-center space-x-3 p-2 rounded cursor-pointer ${
                selectedUser?.id === user.id ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <img
                src={user.image || "https://via.placeholder.com/50"}
                alt={user.name}
                className="w-10 h-10 rounded-full border-2 border-gray-600"
              />
              <span className="font-medium">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat */}
      <div className="col-span-3 bg-gray-900 p-4 flex flex-col justify-between">
        <div className="flex-grow overflow-y-auto">
          <h2 className="text-2xl md:text-3xl text-center font-bold mb-4 text-gray-100 py-3 md:py-8">
            {/* {selectedUser ? selectedUser.name : "Select a user to chat"} */}
            Computer Club Discussion Forums
          </h2>
          <div className="space-y-3 ">
            {messages.length === 0 ? (
              <p className="text-center text-xl md:mt-16 text-gray-400 my-auto">
                {token
                  ? "No messages yet. Be the first to send one!"
                  : "Let's join the club and start some interesting conversations!"}
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
                  <span>{msg.text}</span>
                </div>
              ))
            )}
          </div>
        </div>
        {token && (
          <div className="relative mt-4">
            <input
              type="text"
              value={inputMessage}
              required
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full border border-gray-700 bg-gray-800 text-gray-200 rounded-full p-3 pr-12 focus:ring-2 focus:ring-blue-500"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="absolute inset-y-0 right-0 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-[18px] py-2 rounded-full"
            >
              <IoIosSend className="w-6 h-6 transform rotate-45" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
