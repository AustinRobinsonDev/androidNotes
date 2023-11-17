const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  title: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: String,
    required: true,
  },
  lastUpdated: {
    type: String,
    required: true,
  },
  noteText: {
    type: String,
  },
});

module.exports = mongoose.model("note", NoteSchema);
