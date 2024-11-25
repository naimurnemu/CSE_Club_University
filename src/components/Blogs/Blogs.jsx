import { useEffect, useState } from "react";
import blogImg from "../../assets/images/blogImg.jpeg";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    fetch("https://computer-club.onrender.com/post/posts/")
      .then((response) => response.json())
      .then((data) => setBlogsData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="lg:max-w-screen-xl lg:py-10 py-6  px-6">
        <div className="flex justify-between">
          <h2 className="text-2xl lg:text-5xl font-bold text-black mb-8">
            OUR BLOGS
          </h2>
          <button className="lg:text-xl text-sm font-semibold lg:font-bold pb-8 items-center hover:text-[#C3E92D] transition-colors duration-500 ease-in-out">
            VIEW ALL
          </button>
        </div>
        <div className="grid lg:grid-cols-8 grid-cols-1 gap-8 mx-auto">
          {/* Left Section */}
          <div className="lg:col-span-4 col-span-1">
            <div className="relative h-full">
              <img
                className="w-full h-full object-cover"
                src={blogImg}
                alt="Main Blog"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-6 space-y-3">
                <button className=" bg-black text-[#C3E92D] rounded-md hover:bg-[#C3E92D] hover:text-black px-3 py-2 text-sm font-bold">
                  RUNNING
                </button>
                <h2 className="lg:text-2xl font-bold hover:text-[#C3E92D]">
                  10 Essential Tips For Beginner Runners: Start Your Running
                  Journey Right
                </h2>
                <p className="text-sm">by Tony Nguyen — Oct 12, 2023</p>

                <button className="text-white lg:font-semibold">
                  READ MORE
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-1 lg:col-span-4 space-y-6">
            {blogsData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-4 sm:space-y-0 bg-gray-50 rounded-md shadow-sm hover:shadow-lg"
              >
                {/* Image Section */}
                <img
                  className="w-full sm:w-40 sm:h-24 lg:w-60 lg:h-36 object-cover"
                  src={item.image}
                  alt="Blog Thumbnail"
                />

                {/* Info Section */}
                <div className="flex flex-col space-y-2">
                  <div className="space-y-1">
                    <button className="bg-black text-[#C3E92D] px-3 py-2 rounded-md hover:bg-[#C3E92D] hover:text-black text-xs font-bold">
                      {item.category || "RUNNING"}
                    </button>
                    <h3 className="font-bold text-black hover:text-[#C3E92D]">
                      {item.title || "Default Blog Title"}
                    </h3>
                    <p className="text-sm text-black hover:text-[#C3E92D]">
                      by {item.author || "Unknown"} — {item.date || "N/A"}
                    </p>
                  </div>
                  <Link to={`/blogDetails/${item.id}`}>
                    <button className="text-black text-[14px] font-medium text-start">
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
