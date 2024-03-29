import Note from "../models/note.js";
import { Router } from "express";

const notesRouter = Router();

notesRouter.get("/", async (request, response) => {
  const notes = await Note.find({});
  response.json(notes);
});

notesRouter.get("/:id", (request, response) => {
  try {
    const note = Note.findById(request.params.id);
    if (note) {
      response.json(note);
    } else {
      response.status(404).end();
    }
  } catch (err) {
    response.status(501).end();
  }
});

notesRouter.post("/", async (request, response) => {
  const body = request.body;

  const note = new Note({
    content: body.content,
    important: body.important || false,
  });

  try {
    const savedNote = await note.save();
    response.json(savedNote);
  } catch {
    response.status(501).end();
  }
});

notesRouter.delete("/:id", async (request, response) => {
  try {
    await Note.findByIdAndDelete(request.params.id);
    response.status(204).end();
  } catch (err) {
    response.status(501).end();
  }
});

notesRouter.put("/:id", async (request, response) => {
  const body = request.body;

  const note = {
    content: body.content,
    important: body.important,
  };

  try {
    const updatedNote = await Note.findByIdAndUpdate(request.params.id, note, {
      new: true,
    });
    response.json(updatedNote);
  } catch (err) {
    response.status(501).end();
  }
});

export default notesRouter;
