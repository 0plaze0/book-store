import { useState } from "react";
import { Link } from "react-router-dom";

import { PiBookOpenTextLight } from "react-icons/pi";
import { BiShow, BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

import BookModal from "../BookModal/BookModal";

const SingleBookCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="border-2 border-gray-700 rounded-md px-4 py-2 m-4 relative hover:shadow-md ">
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
        <BiShow
          className="text-xl text-black-400"
          onClick={() => setShowModal(true)}
        />
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
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default SingleBookCard;
