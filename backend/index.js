import express from "express";
import { PORT } from "./config/port.js";
import router from "./routes/api/book.js";
import connectDB, { dbURI } from "./config/dbConn.js";
import mongoose from "mongoose";

connectDB(dbURI);

const app = express();

app.use("/", router);

mongoose.connection.once("open", () => {
  console.log("connect to mongoose");
  app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`);
  });
});
