const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'client/build')));

// Users Route
const Users = require("./routes/Users");
app.use("/users", Users);

app.listen(PORT, _ => {
    console.log("Server running on port ", PORT);
});