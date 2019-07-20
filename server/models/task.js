const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  description: String,
  dateCreated: Date,
  dateCompleted: Date,
  deadline: Date,
  status: { type: Boolean, default: false }
});

mongoose.model("tasks", taskSchema);
