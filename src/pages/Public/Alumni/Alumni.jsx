import React from "react";

const alumni = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Data Scientist",
    email: "jane@example.com",
  },
];

const Alumni = () => (
  <div className="py-8">
    <h2 className="text-2xl font-bold mb-6">Alumni Directory</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {alumni.map((person) => (
        <div key={person.id} className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-bold">{person.name}</h3>
          <p className="text-gray-600">{person.role}</p>
          <p className="text-blue-500">{person.email}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Alumni;
