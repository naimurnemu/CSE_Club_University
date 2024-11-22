import { FaComments, FaTag } from "react-icons/fa";
import img from "../../assets/images/fixedImg.jpg"

const TutorialCard = ({ item }) => {
  const { title, description, comments, category } = item;

  return (
    <div className="card rounded-none">
      <figure>
        <img
          className="hover:scale-105 transition-transform duration-500"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="flex items-center gap-7 py-3">
        <p className="flex items-center text-black">
          <FaTag className="mr-2" />
          <span className="hover:text-[#C3E92D]">{category}</span>
        </p>
        <p className="flex items-center text-black">
          <FaComments className="mr-2" />
          <span className="hover:text-[#C3E92D]">{comments} comments</span>
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-black hover:text-[#C3E92D]">
          {title}
        </h2>
        <p className="font-semibold">{description}</p>
        <div className="card-actions">
          <button className="bg-[#C3E92D] text-black hover:bg-black font-semibold hover:text-[#C3E92D] lg:py-3 px-6 py-2 rounded-md">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
