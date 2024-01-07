import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

import { Spinner } from "./../../components";
import bookApi from "../../api/bookApi";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await bookApi.get("/books");
        setBooks(response.data.book);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (err) {
        console.log(err.msg);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-content items-center">
        <div className="text-3xl my-8">Books List</div>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-700 rounded-md">No.</th>
              <th className="border border-slate-700 rounded-md">Title</th>
              <th className="border border-slate-700 rounded-md max-md:hidden">
                Autor
              </th>
              <th className="border border-slate-700 rounded-md max-md:hidden">
                Publish Year
              </th>
              <th className="border border-slate-700 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td className="flex justify-center border border-slate-700 rounded-md">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md max-md:hidden">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md max-md:hidden">
                  {book.publishYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-2xl text-blue-700" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-400" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-700" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
