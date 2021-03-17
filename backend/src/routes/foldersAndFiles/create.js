const express = require("express");
const fs = require("fs");
const path = require("path");
const User = require("../../app/models/user");
const resolvePath = require("../../config/path");
const router = express.Router();

router.post("/user", async (req, res) => {
  console.log("chegando aqui");
  const { name } = req.body;

  const user = await User.create({ user: name });
  res.json(user);
});

router.post("/:path?", async (req, res) => {
  const { absolute: dirPath } = resolvePath(req.params.path);
  const { nameFolder } = req.body;

  if (!nameFolder) {
    return res.status(400).json({
      message: "Nome não especificado",
    });
  }

  try {
    await fs.promises.mkdir(path.join(dirPath, nameFolder));
  } catch (error) {
    console.log(error);
  }

  return res.status(201).json({ message: "Criado com sucesso!" });
});

module.exports = router;