import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className=" w-full fixed bg-black bg-opacity-60 top-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px]  max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <div className="flex">
          <p className="text-gray-400 mr-5">{book._id}</p>
          <p className="w-fit bg-red-200 p-1 rounded-md ">{book.publishYear}</p>
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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            earum obcaecati veritatis fugiat molestiae in placeat ea ex id iste
            repellat, sint esse autem exercitationem laudantium, natus quibusdam
            accusantium culpa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
