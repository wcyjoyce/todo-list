const mongoose = require("mongoose");

const Task = mongoose.model("tasks");

module.exports = app => {
  // CRUD #1: read tasks (all)
  app.get("/api/tasks", (req, res) => {
    Task.find((error, tasks) => {
      res.send(tasks);
    });
  });

  // CRUD #2: read task (individual)
  app.get("/setup/:id", (req, res) => {
    Task.findById({ _id: req.params.id }, (error, task) => {
      if (error) throw error;
      res.send(task);
    });
  });

  // CRUD #3: create task
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
