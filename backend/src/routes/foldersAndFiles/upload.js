const express = require("express");
const multer = require("multer");
const {} = require("../../app/controllers/folderController")
const router = express.Router();

const uploadConfig = require("../../config/multer");
const storage = require("../../config/storage");
const upload = multer(uploadConfig);

router.post("/:owner/:path?", async (req, res) => {
const { owner, path } = req.path
  console.log(req.files)
  //await files.create({})

  return res.json({})
}, upload.array("files"), (req, res) => {
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
