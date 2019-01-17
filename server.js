// dependencies
const express = require ("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
require("dotenv").config();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

app.post("./nyt/:query", ((res, req) => {
    axios.get(process.env.BASEURL + process.env.APIKEY + req.params.query).then(response => {
        res.json(response.data.response.docs);
    });
}));

//API routes
app.use(routes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
  