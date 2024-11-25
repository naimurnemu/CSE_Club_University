import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

 
  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => response.json())
      .then((data) => {
        const blog = data.find((item) => item.id === id);
        setDetails(blog);
      })
      .catch((error) =>{console.error("Error fetching JSON:", error)});
  }, [id]);

  if (!details) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h1>{details.title}</h1>
    </div>
  );
};

export default BlogDetails;
