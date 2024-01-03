import express from "express";
import bookController from "./../../controller/bookController.js";

const router = express.Router();

router
  .route("/book")
  .get((req, res) => {
    res.status(200).send("Hello");
  })
  .post(bookController.createBook);

export default router;
