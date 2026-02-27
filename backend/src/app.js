import express from "express";
import cors from "cors";
import progressRoutes from './routes/progress-routes.js'; // ✅ Changed to import

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/progress', progressRoutes);

export default app;
