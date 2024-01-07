import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BackButton, Spinner } from "./../../components";
import bookApi from "./../../api/bookApi";

const CreateBook = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      title,
      author,
      publishYear,
    };
    try {
      await bookApi.post("./books", data);
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-blue-400 p-4 mx-auto">
          <form className="flex flex-col ">
            <div className="my-4  ">
              <label htmlFor="#title" className="text-2xl mr-4 color-gray-400">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 w-full"
              />
            </div>
            <div className="my-4  ">
              <label htmlFor="#title" className="text-2xl mr-4 color-gray-400">
                Author
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="border-2 w-full"
              />
            </div>
            <div className="my-4  ">
              <label htmlFor="#title" className="text-2xl mr-4 color-gray-400">
                Publish Year
              </label>
              <input
                type="text"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                className="border-2 w-full"
              />
            </div>
            <button
              className="p-2 bg-sky-400 text-white-200"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateBook;
