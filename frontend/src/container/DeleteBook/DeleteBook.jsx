import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import { BackButton, Spinner } from "./../../components";
import bookApi from "./../../api/bookApi";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await bookApi.delete(`./books/${id}`);
      setLoading(false);
      enqueueSnackbar("Book Deleted Successfully", { variant: "success" });
      navigate("/");
    } catch (err) {
      console.log(err.message);
      enqueueSnackbar("Error", { variant: "error" });
      alert("An error has occured");
    }
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : " "}
      <div className="w-full p-2 flex flex-col items-center border-2 border-sky-200 bg-grey-200">
        <h1 className="text-2xl m-4">Are you sure you want to delete it?</h1>
        <button
          className="text-2xl bg-red-500 p-2 rounded-md text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
