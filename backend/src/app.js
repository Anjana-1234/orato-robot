import express from "express";
import cors from "cors";

const app = express();
const progressRoutes = require('./routes/progress-routes');

app.use(cors());
app.use(express.json());
app.use('/api/progress', progressRoutes);

export default app;
