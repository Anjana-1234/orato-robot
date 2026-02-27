import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB Connected");
    } else {
      console.warn("⚠️  MONGO_URI not set. Using mock data for now.");
    }
  } catch (error) {
    console.error("⚠️  DB connection warning:", error.message);
    console.log("Continuing with mock data...");
  }
};

export default connectDB;
