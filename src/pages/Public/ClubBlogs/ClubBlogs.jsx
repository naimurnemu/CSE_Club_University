import React from "react";

const blogs = [
  {
    id: 1,
    title: "Club Activities 101",
    excerpt: "Learn about our recent events.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Technical Write-Ups",
    excerpt: "Explore our innovative projects.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Updates and News",
    excerpt: "Stay updated with club happenings.",
    image: "https://via.placeholder.com/150",
  },
];

const ClubBlogs = () => (
  <div className="py-8">
    <h2 className="text-2xl font-bold mb-6">Club Blogs</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white shadow-md rounded-lg p-4">
          <img
            src={blog.image}
            alt={blog.title}
            className="rounded-lg mb-4 w-full h-40 object-cover"
          />
          <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
          <p className="text-gray-600 mb-4">{blog.excerpt}</p>
          <button className="text-green-600 font-semibold hover:underline">
            Read More
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default ClubBlogs;
