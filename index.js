// requires the express js and body-parser pakage

const express = require('express');
const bodyParser = require('body-parser');

// sets express js, body parser and ejs

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// get the currentDate 

const currentDate = new Date();
const options = { weekday: 'long', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

const items = [];

// resets the list

function del() {
  items = []
};

// gets ejs file and renders the parsed value

app.get("/", (req, res) => {
  
  res.render("index", {date: formattedDate, newListItem: items});
  setTimeout(del, 900000); 
})

// Accquires the input data and redirects the server

app.post("/", (req, res) => {
let item = req.body.newItem;
items.push(item);
res.redirect("/");
})




// starts the server on given port

app.listen(process.env.PORT || 3000, () => {
console.log(`Server is running on port 3000`);
})