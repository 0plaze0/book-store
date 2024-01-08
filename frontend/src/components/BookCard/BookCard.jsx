import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BookCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <div
          key={book._id}
          className="border-2 border-gray-700 rounded-md px-4 py-2 m-4 relative hover:shadow-md "
        >
          <div className="flex">
            <p className="text-gray-400 mr-5">{book._id}</p>
            <p className="absolute bg-red-200 p-1 rounded-md top-0 right-0 m-1">
              {book.publishYear}
            </p>
          </div>
          <div className="my-2 text-gray-500 ">
            <div className="flex  m-2 items-center align-center  gap-x-4">
              <PiBookOpenTextLight className="text-2xl text-red-500 " />
              <p className="text-sm">{book.title}</p>
            </div>
            <div className="flex  m-2 items-center align-center">
              <BiUserCircle className="text-2xl text-red-500 mr-2" />
              <p className="text-sm">{book.author}</p>
            </div>
          </div>
          <div className="flex gap-x-4 justify-around m-4">
            <Link to={`/books/details/${book._id}`}>
              <BsInfoCircle className="text-xl text-blue-400" />
            </Link>
            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit className="text-xl text-yellow-400" />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <MdOutlineDelete className="text-xl text-red-400" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
