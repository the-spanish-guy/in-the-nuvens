const express = require("express");
const multer = require("multer");
const { create } = require("../../app/controllers/fileController");
const router = express.Router();

const uploadConfig = require("../../config/multer");
const storage = require("../../config/storage");
const upload = multer(uploadConfig);

router.post("/:owner/:path?", upload.array("files"), (req, res) => {
  req.files.map((file) => {
    create({
      owner: req.params.owner,
      path: file.path,
      name: file.originalname
    });
  });
  if (req.files.length > 1) {
    return res
      .status(201)
      .json({ message: "Upload de arquivos realizado com sucesso!" });
  }

  return res
    .status(201)
    .json({ message: "Upload de arquivo realizado com sucesso!" });
});

module.exports = router;
