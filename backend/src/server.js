import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth-routes.js";
import otpRoutes from "./routes/otpRoutes.js";

dotenv.config(); // MUST be first

const app = express();

app.use(cors());
app.use(express.json());

connectDB(); // AFTER dotenv

app.use("/api/auth", authRoutes);
app.use("/api/otp", otpRoutes);

app.get("/", (req, res) => {
  res.send("Orato Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
