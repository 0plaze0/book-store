import mongoose from "mongoose";
import "dotenv/config";

export const dbURI = process.env.DB_URI;

const connectDB = async (dbURI) => {
  try {
    await mongoose.connect(dbURI);
  } catch (err) {
    console.error(err.message);
  }
};

export default connectDB;
