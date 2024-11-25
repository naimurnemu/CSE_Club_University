import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  
  useEffect(() => {
    fetch(`https://computer-club.onrender.com/post/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, [id]);
  
  if (!details) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <h1>{details.title}</h1>
      <p>{details.content}</p>
    </div>
  );
};

export default BlogDetails;
