const mongoose = require("mongoose");

const Task = mongoose.model("tasks");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send({ "todo": "list" });
  });

  app.get("/api/tasks", async (req, res) => {
    console.log("all tasks")
  });

  app.post("/api/tasks", async (req, res) => {
    const { name, dateCreated, status } = req.body;
    const task = new Task({
      description,
      dateCreated: Date.now(),
      status
    });

    try {
      await task.save();
      res.send(task);
    } catch (error) {
      res.status(422).send(error);
    };
  });
};
