import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation to login page

const Chat = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const navigate = useNavigate(); // Hook for navigation
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Fetch users list from the user endpoint
    fetch("http://computer-club.onrender.com/users/users/")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));

    // Fetch messages for the group
    fetch("https://computer-club.onrender.com/message/messages")
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error("Error fetching messages:", error));
  }, []);

  const sendMessage = () => {
    if (!inputMessage.trim()) return; // Prevent empty messages

    if (!token) {
      navigate("/login"); // Navigate to login if no token is present
      return;
    }

    const newMessage = { username: "You", text: inputMessage };
    setMessages([...messages, newMessage]);
    setInputMessage(""); // Clear input field
    // Optionally, send the new message to the server
    // fetch("API_ENDPOINT", { method: 'POST', body: JSON.stringify(newMessage), ... });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen">
      {/* User List */}
      <div className="hidden lg:block col-span-1 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Users</h2>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className={`flex items-center space-x-3 p-2 rounded cursor-pointer ${
                selectedUser?.id === user.id ? "bg-blue-200" : ""
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <img
                src={user.image || "https://via.placeholder.com/50"}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <span>{user.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat */}
      <div className="col-span-2 bg-white p-4 flex flex-col justify-between">
        <div className="flex-grow overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">
            {selectedUser ? selectedUser.name : "Select a user to chat"}
          </h2>
          <div className="space-y-2">
            {messages.length === 0 ? (
              <p className="text-center text-gray-500">
                {token
                  ? "No messages yet. Be the first to send one!"
                  : "Let's join the club and start some interesting conversations!"}
              </p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <strong>{msg.username}:</strong>
                  <span>{msg.text}</span>
                </div>
              ))
            )}
          </div>
        </div>
        {token && (
          <div className="flex space-x-2 mt-4">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-grow border rounded p-2"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
