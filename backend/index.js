import express from "express";
import { PORT } from "./config/port.js";
import router from "./routes/api/book.js";

const app = express();

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
