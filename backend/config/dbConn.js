import mongoose from "mongoose";

export const dbURI = "mongodb://127.0.0.1:27017/";

const connectDB = async (dbURI) => {
  try {
    await mongoose.connect(dbURI);
  } catch (err) {
    console.error(err.message);
  }
};

export default connectDB;
