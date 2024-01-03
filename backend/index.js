import express from "express";
import mongoose from "mongoose";

import { PORT } from "./config/port.js";
import connectDB, { dbURI } from "./config/dbConn.js";
import router from "./routes/api/book.js";

//connection to database
connectDB(dbURI);

const app = express();

app.use("/", router);

mongoose.connection.once("open", () => {
  console.log("connect to mongoose");
  app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`);
  });
});
