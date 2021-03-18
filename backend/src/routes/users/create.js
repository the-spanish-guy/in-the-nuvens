const express = require("express");
const { findbyUserName, create } = require("../../app/controllers/userController");
const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  
  let user = await findbyUserName(username)

  if(user){
    return res.status(302).json({ message: 'Usuário já existe!' });
  }
  
  user = create({ username, password });
  res.status(201).json(user);
});

module.exports = router;
