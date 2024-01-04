import express from "express";
import bookController from "./../../controller/bookController.js";

const router = express.Router();

router
  .route("/books")
  .get(bookController.getAllBook)
  .post(bookController.createBook);

router.route("/books/:id").get(bookController.getBook);

export default router;
