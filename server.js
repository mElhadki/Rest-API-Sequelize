const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
//refresh migration
db.sequelize.sync();

app.get("/", (req, res) => {
  res.send("Test api squelize");
});

var booksRouter = require("./app/routes/book.routes");

app.use("/api/books/", booksRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
