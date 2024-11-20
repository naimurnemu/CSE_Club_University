import React from "react";

const announcements = [
  { id: 1, title: "Placement Opportunities", description: "Apply now for campus placements." },
  { id: 2, title: "Upcoming Events", description: "Join us for the Annual Tech Fest." },
];

const Announcements = () => (
  <div className="py-8">
    <h2 className="text-2xl font-bold mb-6">Department Announcements</h2>
    <ul className="space-y-4">
      {announcements.map((item) => (
        <li key={item.id} className="bg-gray-100 p-4 rounded-md shadow-md">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Announcements;
