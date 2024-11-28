import { useEffect, useState } from "react";
import blogImg from "../../assets/images/b4.jpg";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    fetch("https://computer-club.onrender.com/post/posts/")
      .then((response) => response.json())
      .then((data) => setBlogsData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toISOString().split("T")[0];
  };

  return (
    <div className="w-full bg-gray-900">
      <div className="max-w-7xl w-full mx-auto px-2 md:px-5 lg:px-0 py-24">
        <div className="flex justify-between">
          <h2 className="text-2xl lg:text-5xl font-bold text-white mb-8 text-center">
            OUR BLOGS
          </h2>
          <Link to="/all-blogs">
          <button className="border-2 border-gray-500 text-white text-xs font-semibold lg:font-bold mb-8 items-center hover:bg-gray-500 hover:text-white transition-colors duration-500 ease-in-out rounded-full px-4 py-2">
            VIEW ALL
          </button>
          </Link>
        </div>
        <div className="grid lg:grid-cols-8 grid-cols-1 gap-8 mx-auto">
          {/* Left Section */}
          <div className="lg:col-span-4 col-span-1">
            <div className="relative h-full">
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-md"></div>
              <img
                className="w-full h-full object-cover rounded-md"
                src={blogImg}
                alt="Main Blog"
              />
              <div className="absolute bottom-0 left-0  text-white p-6 space-y-3">
                <button className=" bg-gray-600 text-[#C3E92D] rounded-md hover:bg-[#C3E92D] hover:text-black px-3 py-2 text-sm font-bold">
                  RUNNING
                </button>
                <h2 className="lg:text-2xl font-bold hover:text-[#22C55E]">
                  10 Essential Tips For Beginner Runners: Start Your Running
                  Journey Right
                </h2>
                <p className="text-sm">by Tony Nguyen — Oct 12, 2023</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-1 lg:col-span-4 space-y-6">
            {blogsData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start p-4 sm:space-x-4 space-y-4 sm:space-y-0 bg-gray-800 rounded-md shadow-sm hover:shadow-lg"
              >
                {/* Info Section */}
                <div className="flex flex-col space-y-2">
                  <div className="space-y-1">
                    <h3 className="font-bold text-white hover:text-[#22C55E]">
                      {item.title || "Default Blog Title"}
                    </h3>
                    <p className="text-sm text-white hover:text-[#22C55E]">
                      by {item.author_name || "Unknown"} —{" "}
                      {formatDate(item.created_at) || "N/A"}
                    </p>
                  </div>
                  <Link to={`/blogDetails/${item.id}`}>
                    <button className="text-white text-[14px] font-medium text-start underline hover:text-[#22C55E] pt-4">
                      READ MORE
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
