import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { BackButton, Spinner } from "./../../components";
import bookApi from "./../../api/bookApi";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await bookApi.get(`./books/${id}`);
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);

        setLoading(false);
      } catch (err) {
        console.log(err.msg);
        enqueueSnackbar("Error", { variant: "error" });
      }
    };
    fetchData();
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      title,
      author,
      publishYear,
    };
    try {
      await bookApi.put(`./books/${id}`, data);
      setLoading(false);
      enqueueSnackbar("Book Updated Succesfully", { variant: "success" });
      navigate("/");
    } catch (err) {
      console.log(err.message);
      alert("An error has occured");
    }
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
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
              onClick={handleEdit}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditBook;
