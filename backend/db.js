const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://shubhamsharma639615:admin0000@cluster0000.swksl.mongodb.net/todos>?retryWrites=true&w=majority")


const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports= {todo}