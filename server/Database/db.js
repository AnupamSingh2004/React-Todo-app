const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema({
  todo: String,
  done: {
    type: Boolean,
    default: false,
  },
});

const Todos = mongoose.model("Todos", TodosSchema);

module.exports = {
  Todos,
};
