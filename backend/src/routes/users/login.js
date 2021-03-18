const express = require("express");
const bcrypt = require('bcrypt')
const { findbyUserName } = require("../../app/controllers/userController");
const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const user = await findbyUserName(username);
  if(!user) {
    return res.status(404).json({message: 'Usuário não encontrado!'})
  }

  const found = bcrypt.compareSync(password, user.password)
  if(!found) {
    return res.status(404).json({message: 'Usuário ou senha incorretas!'})
  }
  res.status(201).json(user);
});

module.exports = router;
