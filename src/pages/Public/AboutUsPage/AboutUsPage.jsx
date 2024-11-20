import React from "react";

const teamMembers = [
  { name: "John Doe", role: "President", email: "john@example.com", image: "https://via.placeholder.com/150" },
  { name: "Jane Smith", role: "Vice President", email: "jane@example.com", image: "https://via.placeholder.com/150" },
  { name: "Mike Johnson", role: "General Secretary", email: "mike@example.com", image: "https://via.placeholder.com/150" },
  { name: "Sarah Brown", role: "Treasurer", email: "sarah@example.com", image: "https://via.placeholder.com/150" },
  { name: "Tom Clark", role: "Public Relations Officer", email: "tom@example.com", image: "https://via.placeholder.com/150" },
  { name: "Lisa Adams", role: "Technical Coordinator", email: "lisa@example.com", image: "https://via.placeholder.com/150" },
  { name: "Emily Taylor", role: "Event Coordinator", email: "emily@example.com", image: "https://via.placeholder.com/150" },
  { name: "Chris White", role: "Creative Head", email: "chris@example.com", image: "https://via.placeholder.com/150" },
  { name: "Sophia Lee", role: "Membership Coordinator", email: "sophia@example.com", image: "https://via.placeholder.com/150" },
  { name: "David Green", role: "Training and Development Head", email: "david@example.com", image: "https://via.placeholder.com/150" },
  { name: "Angela Moore", role: "Web Administrator", email: "angela@example.com", image: "https://via.placeholder.com/150" },
  { name: "Jake Brown", role: "Social Media Manager", email: "jake@example.com", image: "https://via.placeholder.com/150" },
  { name: "Olivia Miller", role: "Logistics Head", email: "olivia@example.com", image: "https://via.placeholder.com/150" },
  { name: "Lucas Scott", role: "Outreach Coordinator", email: "lucas@example.com", image: "https://via.placeholder.com/150" },
  { name: "Mia Walker", role: "Research and Innovation Lead", email: "mia@example.com", image: "https://via.placeholder.com/150" },
  { name: "Ethan Allen", role: "Alumni Coordinator", email: "ethan@example.com", image: "https://via.placeholder.com/150" },
];

const AboutUsPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={member.image}
              alt={`${member.name}`}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-lg font-bold">{member.name}</h2>
            <p className="text-sm text-gray-500">{member.role}</p>
            <a
              href={`mailto:${member.email}`}
              className="text-blue-500 text-sm mt-2 underline"
            >
              {member.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;

