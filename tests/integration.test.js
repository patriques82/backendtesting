import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import supertest from "supertest";

import app from "../app.js";
const api = supertest(app);

let mongoServer;

beforeEach(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);
});

afterEach(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

test("saves a note", async () => {
  const res = await api
    .post("/api/notes/")
    .send({ content: "testing", important: true });
  expect(res.statusCode).toBe(201);
  expect(res.body.content).toBe("testing");
});

test("saves a note", async () => {
  await api.post("/api/notes/").send({ content: "testing1", important: true });
  await api.post("/api/notes/").send({ content: "testing2", important: true });

  const res = await api.get("/api/notes/");
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBe(2);
});
