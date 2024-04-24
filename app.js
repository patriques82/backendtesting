import config from "./utils/config.js";
import express from "express";
import cors from "cors";
import notesRouter from "./controllers/notes.js";
// import { MongoMemoryServer } from "mongodb-memory-server";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/notes", notesRouter);

export default app;
