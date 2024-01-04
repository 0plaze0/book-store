import { Book } from "../model/Book.js";

const getAllBook = async (req, res) => {
  try {
    const result = await Book.find({});
    if (!result)
      return res.status(204).send({ message: "No book present in database" });
    res.status(200).json({
      count: result.length,
      book: result,
    });
  } catch (err) {
    console.error(err.msg);
    res.status(500).send({ message: err.msg });
  }
};

const createBook = async (req, res) => {
  if (!req.body.title || !req.body.author || !req.body.publishYear) {
    return res.status(400).send({ message: "Please Enter valid data" });
  }
  const newBook = {
    title: req.body.title,
    author: req.body.author,
    publishYear: req.body.publishYear,
  };
  try {
    const result = await Book.create(newBook);
    res.status(200).send(result);
  } catch (err) {
    console.log(err.msg);
    res.status(500).send({ message: err.message });
  }
};

export default { createBook, getAllBook };
