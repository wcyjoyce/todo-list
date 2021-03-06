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
  app.get("/api/tasks/:id", (req, res) => {
    Task.findById({ _id: req.params.id }, (error, task) => {
      if (error) throw error;
      res.send(task);
    });
  });

  // CRUD #3: create task
  app.post("/api/tasks", async (req, res) => {
    const { description, dateCreated, status } = req.body;
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

  // CRUD #4: update task
  app.get("/api/tasks/:id", (req, res) => {
    Task.findByIdAndUpdate({ _id: req.params.id }, (error, task) => {
      if (error) throw error;
      const { description, deadline, status } = req.body;
      task.description = description;
      task.deadline = deadline;
      task.status = status;
      res.send("task updated");
    });
  });

  // CRUD #5: delete task
  app.delete("/api/tasks/:id", (req, res) => {
    Task.findByIdAndRemove(req.body.id, (error, task) => {
      if (error) throw error;
      res.send("task removed");
    });
  });
};
