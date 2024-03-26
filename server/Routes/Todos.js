const mongoose = require("mongoose");
const express = require("express");
const { Todos } = require("../Database/db");

const router = express.Router();

router.get("/todosget", async (req, res) => {
  const ToDos = await Todos.find();
  res.send(ToDos);
});

router.post("/todossave", async (req, res) => {
  const toDo = req.body;

  const todosave = new Todos(toDo);
  todosave.save();
  res.send(todosave);
});

router.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;

  Todos.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted succesfully...");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
});

router.put("/todos/:id", async (req, res) => {
  const id = req.params;
  const toDo = req.body;

  Todos.findByIdAndUpdate(id, { toDo }).then(() => {
    res.send("Updated succesfully...");
  });
});

module.exports = router;
