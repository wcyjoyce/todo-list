const express = require("express");
const mongoose = require("mongoose");

const keys = require("./config/keys.js");

// Importing models
require("./models/task.js");

const Task = mongoose.model("tasks"); // accessing "task" model class

mongoose.connect(keys.mongoURI); // connecting Mongoose to MongoDB
const app = express(); // initiates a new Express app

// Importing routes
require("./routes/taskRoutes.js")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
