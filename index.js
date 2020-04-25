const express = require("express");
// const mongoose = require("mongoose");
// const config = require("config");

const app = express();

app.use(express.json());

// const db = config.get("mongoURI");

// mongoose
//   .connect(db)
//   .then(() => console.log("💻 Mondodb Connected"))
//   .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

app.get("/app", (req, res) => {
  res.send("Hello From Travis🔥");
});

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`Server running on port ${port} 🔥`);
});

module.exports = server;
