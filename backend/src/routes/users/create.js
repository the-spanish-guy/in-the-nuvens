const express = require("express");
const path = require("path");
const fs = require("fs");
const {
  findbyUserName,
  create,
} = require("../../app/controllers/userController");
const resolvePath = require("../../config/path");
const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  let user = await findbyUserName(username);

  if (user) {
    return res.status(302).json({ message: "Usuário já existe!" });
  }

  user = await create({ username, password });

  const { absolute: dirPath } = resolvePath(user.id);
  try {
    await fs.promises.mkdir(dirPath);
  } catch (error) {
    console.log(error);
  }

  res.status(201).json(user);
});

module.exports = router;
