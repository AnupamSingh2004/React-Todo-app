const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
});

const Todos = mongoose.model("Todos", TodosSchema);

module.exports = {
  Todos,
};
