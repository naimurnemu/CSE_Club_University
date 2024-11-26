import { FaComments, FaTag } from "react-icons/fa";
import img from "../../assets/images/fixedImg.jpg";

const TutorialCard = ({ item }) => {
  const { title, description, comments, category } = item;

  return (
    <div className="card rounded-lg border border-gray-300 shadow-lg p-4">
      <figure>
        <img
          className="hover:scale-105 transition-transform duration-500"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="flex items-center gap-7 py-3">
        <p className="flex items-center text-gray-700">
          <FaTag className="mr-2" />
          <span className="font-medium">{category}</span>
        </p>
        <p className="flex items-center text-gray-700">
          <FaComments className="mr-2" />
          <span className="font-medium">{comments} comments</span>
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-black">
          {title}
        </h2>
        <p className="text-gray-600 font-normal">{description}</p>
        <div className="card-actions">
          <button className="bg-[#C3E92D] text-black hover:bg-[#A3C92D] font-semibold rounded-full lg:py-3 px-6 py-2">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
