const express = require("express");
const multer = require("multer");
const router = express.Router();

const uploadConfig = require("../../config/multer");
const storage = require("../../config/storage");
const upload = multer(uploadConfig);

router.post("/:path?", upload.array("files"), (req, res) => {
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
