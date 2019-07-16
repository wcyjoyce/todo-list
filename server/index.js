const express = require("express");

const app = express(); // initiates a new Express app

app.get("/", (req, res) => {
  res.send({ "todo": "list" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
