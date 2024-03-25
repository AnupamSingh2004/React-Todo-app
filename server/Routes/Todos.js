const mongoose = require("mongoose");
const express = require("express");
const { Todos } = require("../Database/db");

const router = express.Router();

router.get("/todos", async (req, res) => {
  res.status(200).json({ mssg: "GET REQUEST TO /api/todos" });
});

router.post("/todos", async (req, res) => {
  res.status(201).json({ mssg: "POST REQUEST TO /api/todos" });
});

router.delete("/todos/:id", async (req, res) => {
  res.status(200).json({ mssg: "DELETE REQUEST TO /api/todos:id" });
});

router.put("/todos/:id", async (req, res) => {
  res.status(200).json({ mssg: "PUT REQUEST TO /api/todos:id" });
});

module.exports = router;
