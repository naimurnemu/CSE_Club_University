import React, { useEffect, useState } from "react";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch("http://city-uni-dpt-api.onrender.com/notification/announcements/");
        const data = await response.json();
        setAnnouncements(data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="py-8 px-3 md:px-5 max-w-7xl mx-auto bg-[#111827]">
      <h2 className="text-2xl font-bold mb-6">Department Announcements</h2>
      <ul className="space-y-4">
        {announcements.map((item) => (
          <li key={item.id} className="bg-gray-800 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-gray-200">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
