const express = require("express");
const mongoose = require("mongoose");

const keys = require("./config/keys.js");

mongoose.connect(keys.mongoURI); // connecting Mongoose to MongoDB
const app = express(); // initiates a new Express app

app.get("/", (req, res) => {
  res.send({ "todo": "list" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
