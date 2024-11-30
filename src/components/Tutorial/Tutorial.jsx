import { useEffect, useState } from "react";
import TutorialCard from "./TutorialCard";

const Tutorial = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/tutorialData.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl w-full mx-auto px-3 md:px-5">
        <div className="text-center space-y-4">
        <h1 className="text-white text-opacity-80 text-xl font-semibold">
          TUTORIAL
        </h1>
        <h1 className="lg:text-5xl text-2xl text-white font-bold lg:w-3/4 mx-auto">
          RUNNING COURSE ARTICLES & VIDEO TUTORIALS ABOUT RUNNING
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 py-10">
        {data.map((item) => (
          <TutorialCard key={item.title} item={item}></TutorialCard>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Tutorial;
