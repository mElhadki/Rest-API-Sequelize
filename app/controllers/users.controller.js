const db = require("../models/");
const Users = db.users;
const bcrypt = require('bcrypt')

exports.create = (req, res) => {
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const users = {
    email: req.body.email,
    password: req.body.password,
    
  };

  Users.create(users)
       .then(data => res.send(data))
       .catch(err => res.status(500).send(err.message || "Some error occurred while creating the user."))
};

exports.register = (req, res) => {
 
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const userData = {
    email: req.body.email,
    password: req.body.password,
  }

  Users.findOne({
    where: {
      email:  req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          Users.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
}

