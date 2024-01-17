import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

import connectDB, { dbURI } from "./config/dbConn.js";
import router from "./routes/api/book.js";
import corsOptions from "./config/corsOptions.js";

const PORT = process.env.PORT || 5555;
const app = express();

//connection to database
connectDB(dbURI);

//middleware
app.use(cors(corsOptions));
//middleware
app.use(express.json());

app.use("/", router);

mongoose.connection.once("open", () => {
  console.log("connect to mongoose");
  app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`);
  });
});
