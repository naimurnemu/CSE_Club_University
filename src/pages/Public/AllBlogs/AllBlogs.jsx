import React, { useState, useEffect } from "react";

const AllBlogs = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    fetch("https://computer-club.onrender.com/post/posts/")
      .then((response) => response.json())
      .then((data) => setBlogsData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="bg-gray-900 py-10">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {blogsData.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-gray-800 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Blog Information */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white hover:text-[#22C55E] transition-colors duration-200">
                {item.title || "Default Blog Title"}
              </h3>
              <p className="text-sm text-gray-400">
                by <span className="font-medium">{item.author_name || "Unknown"}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
