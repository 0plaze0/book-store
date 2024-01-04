import express from "express";
import bookController from "./../../controller/bookController.js";

const router = express.Router();

router
  .route("/book")
  .get(bookController.getAllBook)
  .post(bookController.createBook);

export default router;
