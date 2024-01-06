import { useState, useEffect } from "react";
import { Spinner } from "./../../components";
import bookApi from "../../api/bookApi";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await bookApi.get("/books");

      setBooks(response.data.book);
    };
    fetchData();
  }, []);

  return (
    <div>
      {books.map((book) => (
        <li key={book._id}>{book.title}</li>
      ))}
    </div>
  );
};

export default Home;
