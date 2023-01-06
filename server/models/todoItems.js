const mongoose = require('mongoose');

//creating a schema for mongodb
const TodoItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:false
    }
})

module.exports = mongoose.model('todo', TodoItemSchema);