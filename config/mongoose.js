
const mongoose = require("mongoose");

mongoose.connect('mongodb://0.0.0.0:27017/Nodejs_Mazor_Project_db');


const db = mongoose.connection;

db.on('error',function(err){
    console.log(err.message);
})

db.once('open',function(){
    console.log("Successfully again connect tot the database!!");
})