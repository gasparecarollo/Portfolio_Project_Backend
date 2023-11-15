//DEPENDENCIES
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const menuItemController = require("./controllers/menuItemController");


//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use('/allMenuItems', menuItemController)

//ROUTES
app.get('/', (req, res) => {
    res.send('WELCOME TO MY FOOD TRUCK APP')
});

app.get('*', (req, res) => {
    res.status(404).send("Uhh... Can you fry it and put it in a sandwich?")
});

module.exports = app;