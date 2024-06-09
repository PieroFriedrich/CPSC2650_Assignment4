import express from "express";
import { addNote, editNote, removeNote } from "../persistence.js";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.post("/", function (req, res, next) {
  const { text } = req.body;
  const id = uuidv4();
  addNote({ id, text });
  res.redirect("/");
});

router.delete("/:id", function (req, res, next) {
    const noteId = req.params.id;
    removeNote(noteId);
    res.sendStatus(204);
  });

router.put("/:id", function (req, res, next) {
    const noteId = req.params.id;
    const newText = req.body.text;

    editNote(noteId, newText);

    res.sendStatus(204); 
});

export default router;
