import React, { useState, useEffect } from "react";

const Chat = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", image: "https://via.placeholder.com/50" },
    { id: 2, name: "Jane Smith", image: "https://via.placeholder.com/50" },
  ]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(savedMessages);
  }, []);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    const newMessage = { username: "You", text: inputMessage };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem("messages", JSON.stringify(updatedMessages));
    setInputMessage("");
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
                src={user.image}
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
            {messages.map((msg, index) => (
              <div key={index} className="flex items-center space-x-2">
                <strong>{msg.username}:</strong>
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Chat;
