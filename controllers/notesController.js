const express = require("express");
const notes = express.Router();
const {
  getAllNotes,
  getNote,
  addNote,
  deleteNote,
  updateNote,
} = require("../queries/notes");
//makenotenote, notenotemodeltypetype, vdetails, notenoteyear, order_iep, disabiliy, is_default, uid, due_date 

// const expenseController = require("./expenseController");
// const tripsController = require("./tripsController");

// notes.use("/:note_id/expenses", expenseController);
// notes.use("/:note_id/trips", tripsController);

notes.get("/", async (req, res) => {
  const uid = req.query.uid;
  try {
    const allNotes = await getAllNotes(uid);
    res.json(allNotes);
  } catch (error) {
    return error;
  }
});

notes.get("/:id", async (req, res) => {
  const { id } = req.params;
  const uid = req.query.uid;
  try {
    const note = await getNote(id, uid);
    res.json(note);
  } catch (error) {
    return error;
  }
});

notes.post("/", async (req, res) => {
  try {
    const notes = await addNote(req.body);
    res.json(notes);
  } catch (error) {
    return error;
  }
});

notes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const uid = req.query.uid;
  try {
    const note = await deleteNote(id, uid);
    res.json(note);
  } catch (error) {
    return error;
  }
});

notes.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const uid = req.query.uid;
  try {
    const note = await updateNote(id, body, uid);
    res.json(note);
  } catch (error) {
    return error;
  }
});

module.exports = notes;
