  const books = require("../controllers/books.controller.js");

  var router = require("express").Router();

 
  router.post("/", books.create);

  router.get("/", books.findAll);

  router.get("/:id", books.findOne);

  router.put("/:id", books.update);

  router.delete("/:id", books.delete);

  module.exports = router;


