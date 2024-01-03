import { Book } from "../model/Book.js";

const createBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "Please Enter valid data" });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const result = await Book.create(newBook);
    res.status(200).send(result);
  } catch (err) {
    console.log(err.msg);
    res.status(500).send({ message: err.message });
  }
};

export default { createBook };
