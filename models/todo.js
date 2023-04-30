const mongoose = require("mongoose");


const TodoShema =  new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    date : {
        type : String,
        required : true
    },

    category : {
        type : String,
        required : true
    }

});


const Todo = mongoose.model('Todo',TodoShema);

module.exports = Todo;