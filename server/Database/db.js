const mongoose = require('mongoose');

const TodosSchema = new mongoose.Schema({
    todos:String,
})

const Todos = mongoose.model('Todos',TodosSchema);

module.exports = {
    Todos
}

