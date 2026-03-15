import mongoose from "mongoose";
import { DB_URL, DB_NAME } from "../constants.js";

const connectDB = async () => {
  console.log("DB_URL:", DB_URL); 
  try {
    const conn = await mongoose.connect(`${DB_URL}/${DB_NAME}?retryWrites=true&w=majority`);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;