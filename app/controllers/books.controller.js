const db = require("../models/");
const Books = db.books;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const books = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  Books.create(books)
       .then(data => res.send(data))
       .catch(err => res.status(500).send(err.message || "Some error occurred while creating the book."))
};

exports.findAll = (req, res) => {

  Books.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err.message || "Some error occurred while retrieving book."))
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Books.findByPk(id)
       .then(data => res.send(data))
       .catch(() => res.status(500).send("Error retrieving book with id=" + id))
}

exports.update = (req, res) => {
  const id = req.params.id;

  Books.update(req.body, { where: { id: id } })
    .then(() => res.send("book was updated successfully."))
    .catch(() => res.status(500).send("Error updating book with id=" + id))
  };

exports.delete = (req, res) => {
  const id = req.params.id;

  Books.destroy({ where: { id: id }})
       .then(() => res.send("book was deleted successfully!"))
       .catch(() => res.status(500).send("Could not delete book with id=" + id))
    };

