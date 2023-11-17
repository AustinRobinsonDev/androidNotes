const express = require("express");
const { check, validationResult } = require("express-validator");
const Note = require("../schemas/Note");
const router = express.Router();
const auth = require("../middleware/auth");
// @route   POST api/notes
// @desc    Adds a note
// @access  Private
router.post("/", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { title, noteText } = req.body;
  try {
    const newNote = new Note({
      title,
      lastUpdated: Date.now(),
      noteText,
      dateCreated: Date.now(),
      user: req.user.id,
    });
    const note = await newNote.save();
    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route   GET api/notes
// @desc    get all notes
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({ date: -1 });
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route   GET api/notes/:id
// @desc    get a note
// @access  Private
// router.get("/:id", (req, res) => {
//   res.send("get a specific note");
// });

// @route   UPDATE api/notes/:id
// @desc    Updates a note
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const { title, lastUpdated, noteText, dateCreated } = req.body;

  const noteFields = {};
  if (title) noteFields.title = title;
  if (lastUpdated) noteFields.orderId = orderId;
  if (noteText) noteFields.noteText = noteText;

  try {
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: "License not found" });
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: noteFields },
      { new: true }
    );
    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route   DELETE api/notes/:id
// @desc    Deletes a note
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: "Note not found" });
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    await Note.findByIdAndRemove(req.params.id);
    res.json({ msg: "note removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
