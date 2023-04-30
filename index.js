const express = require("express");
const port = 3000;
const app = express();
const path = require("path");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware:-
app.use(express.static('assets'));
app.use(express.urlencoded());

// mongoose:-
const db = require('./config/mongoose');
// create connection-
const Todo = require('./models/todo');

app.get('/', function (req, res) {

    Todo.find({}, function (err, todos) {
        if (err) {
            console.log("error is happinning!!");
            return;
        }
        return res.render('home', {
            title: "my Contact List",
            Array: todos
        });

    })

})


app.post("/adding-todos", function (req, res) {

     Todo.create({

        name: req.body.name,
        date: req.body.date,
        category: req.body.category

    }, function (err, newTodo) {
        if (err) {
            console.log("Error is creating the contact");
            return;
        }
        console.log('*******', newTodo);
        return res.redirect('back');
    })

})


app.get('/delete-task', function (req, res) {
   let id = req.query;
    // checking the number of tasks selected to delete
    var count = Object.keys(id).length;
    for (let i = 0; i < count; i++) {
   // finding and deleting tasks from the DB one by one using id
        Todo.findByIdAndDelete(Object.keys(id)[i], function (err) {
            if (err) {
                console.log('error in deleting task');
            }
           
        })
    }
    return res.redirect('back');
  
   })




app.listen(port, function (err) {
    if (err) {
        console.log("Error!!", err);
        return;
    }

    console.log("server is running on port:-", port);
})





