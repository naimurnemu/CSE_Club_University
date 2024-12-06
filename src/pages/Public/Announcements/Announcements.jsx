import React, { useEffect, useState } from "react";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch("https://city-uni-dpt-api.onrender.com/notification/announcements/")
      .then((res) => res.json())
      .then((data) => setAnnouncements(data));
  }, []);

  return (
    <div className="py-8 px-3 md:px-5 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Department Announcements</h2>
      <ul className="space-y-4">
        {announcements.map((item) => (
          <li key={item.id} className="bg-gray-800 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-gray-200">
              Posted on: {new Date(item.created_at).toLocaleDateString()}
            </p>
            <a
              href={item.pdf_file}
              target="_blank"
              download={`${item.title}.pdf`}
              className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded"
            >
              Download PDF
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
