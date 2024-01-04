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
    const book = await Book.create(newBook);
    res.status(200).send(book);
  } catch (err) {
    console.log(err.msg);
    res.status(500).send({ message: err.message });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).send({ message: "please enter valid ID" });
  try {
    const book = await Book.findById(id);

    if (!book)
      return res
        .status(404)
        .send({ message: "cannot find book with the given ID" });
    const { title, author, publishYear } = req.body;

    if (req.body.title) book.title = title;
    if (req.body.author) book.author = author;
    if (req.body.publishYear) book.publishYear = publishYear;

    const result = await book.save();
    res.status(200).json({ message: "Book saved succesfully", result });
  } catch (err) {
    console.error(err.msg);
    console.log("catch");
    res.status(500).send({ message: err.msg });
  }
};

const getBook = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).send({ message: "Please enter valid ID" });
  try {
    const result = await Book.findById(id);
    if (!result)
      return res
        .status(404)
        .send({ message: "cannot find book with the given ID" });
    res.status(400).send(result);
  } catch (err) {
    console.err(err.msg);
    res.status(500).send({ message: err.msg });
  }
};

export default { createBook, getAllBook, getBook, updateBook };
