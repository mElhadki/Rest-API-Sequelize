const users = require("../controllers/users.controller");

var router = require("express").Router();


router.post("/", users.register);

module.exports = router;
