import express from "express";
import { PORT } from "./config/port.js";
const app = express();

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
