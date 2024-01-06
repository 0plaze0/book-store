import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-400 text-white-400 px-4 py-1 rounded-lg w-fit"
      >
        <BsArrowLeft className="text-4xl" />
      </Link>
    </div>
  );
};

export default BackButton;
