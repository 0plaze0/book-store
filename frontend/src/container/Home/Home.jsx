import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { MdOutlineAddBox } from "react-icons/md";

import { Spinner, BookList, BookCard } from "./../../components";
import bookApi from "../../api/bookApi";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toogle, setToogle] = useState("table");
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
      <div className="flex justify-center m-4">
        <button
          className="flex bg-sky-500  hover:bg-sky-400 text-white p-2 rounded-md mr-4"
          onClick={() => setToogle("table")}
        >
          Table
        </button>
        <button
          className="flex bg-sky-500  hover:bg-sky-400 text-white p-2 rounded-md"
          onClick={() => setToogle("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-3xl my-8">Books List</div>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : toogle === "table" ? (
        <BookList books={books} />
      ) : (
        <BookCard books={books} />
      )}
    </div>
  );
};

export default Home;
