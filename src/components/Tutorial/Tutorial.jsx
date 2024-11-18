import { useEffect, useState } from "react";
import TutorialCard from "./TutorialCard";


const Tutorial = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/tutorialData.json')
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) => console.error('Error fetching JSON:', error));
      }, []);
      
    return (
        <div className="bg-white p-6">
            <div className="text-center space-y-4">
            <h1 className="text-black text-opacity-50 text-xl font-semibold">TUTORIAL</h1>
            <h1 className="lg:text-5xl text-2xl text-black font-bold lg:w-3/4 mx-auto">RUNNING COURSE ARTICLES & VIDEO TUTORIALS ABOUT RUNNING</h1>
            </div>
         
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 py-10">
            {
                data.map( (item) => (
                    <TutorialCard key={item.title} item={item}></TutorialCard>
                ))
            }
        </div>

        </div>
    );
};

export default Tutorial;