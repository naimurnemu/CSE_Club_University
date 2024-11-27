import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogImg from "../../../assets/images/blogImg.jpeg";

const BlogDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://computer-club.onrender.com/post/posts/${id}/`)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, [id]);

  if (!details) {
    return <p>Loading...</p>;
  }

  const formatDate = (dateString) => {
    return dateString ? dateString.split("T")[0] : "N/A";
  };

  return (
    <div className="w-full bg-gray-900">
      <div className="lg:max-w-screen-xl mx-auto space-y-4 pt-2 lg:px-4 px-2 lg:pb-10 pb-5">
        <button className="bg-black text-[#C3E92D] px-3 py-2 rounded-md hover:bg-[#C3E92D] hover:text-black text-xs font-bold">
          RUNNING
        </button>
        <h1 className="text-white lg:text-3xl text-xl font-bold">
          {details.title}
        </h1>
        <p className="text-white">{details.content}</p>
        <div className="flex items-center gap-5">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <p className="text-white">
            by {details.author_name}--
            <span>{formatDate(details.created_at)}</span>
          </p>
        </div>
        <div>
          <p className="text-white font-bold">
            Updated_At:{" "}
            <span className="text-white font-sm">
              {formatDate(details.updated_at)}
            </span>
          </p>
        </div>

        <img
          className="w-full h-auto max-h-[500px] object-cover"
          src={blogImg}
          alt="details img"
        />
      </div>
    </div>
  );
};

export default BlogDetails;
