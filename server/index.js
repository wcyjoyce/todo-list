const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const keys = require("./config/keys.js");

// Importing models
require("./models/task.js");

const Task = mongoose.model("tasks"); // accessing "task" model class

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }); // connecting Mongoose to MongoDB
const app = express(); // initiates a new Express app
app.use(bodyParser.json()); // passes app into BodyParser middleware
app.use(allowCrossDomain); // enables cross-domain access

// Importing routes
require("./routes/taskRoutes.js")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
