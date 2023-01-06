const mongoose = require('mongoose');

//creating a schema for mongodb
const TodoItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('todo', TodoItemSchema);