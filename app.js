import config from "./utils/config.js";
import express from "express";
import cors from "cors";
import notesRouter from "./controllers/notes.js";
import mongoose from "mongoose";
// import { MongoMemoryServer } from "mongodb-memory-server";

const app = express();

(async function () {
  mongoose.set("strictQuery", false);
  console.log("connecting to", config.MONGODB_URI);
  try {
    // const mongod = await MongoMemoryServer.create();
    // const uri = mongod.getUri();
    await mongoose.connect(config.MONGODB_URI);
    console.log("connected to MongoDB");
  } catch (err) {
    console.error("error connecting to MongoDB:", err.message);
  }
})();

app.use(cors());
app.use(express.json());
app.use("/api/notes", notesRouter);

export default app;
