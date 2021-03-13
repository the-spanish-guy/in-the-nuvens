const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const mime = require("mime-types");

const routes = express.Router();

const uploadConfig = require("./config/multer");
const storage = require("./config/storage");
const upload = multer(uploadConfig);

routes.get("/:path?", async (req, res) => {
  console.log(req);

  const listDir = await fs.promises.opendir(storage);
  const content = { files: [], folders: [] };
  console.log(listDir);
  for await (const contentDir of listDir) {
    if (contentDir.isDirectory()) {
      content.folders.push(contentDir.name);
    }
    if (contentDir.isFile()) {
      content.files.push(contentDir.name);
    }
  }

  return res.json(content);
});

routes.post("/", upload.array("Arquivo"), (req, res) => {
  console.log(req.files);
  return res.json({ msg: "ok ta" });
});

routes.post("/:pathToCreate?/create", async (req, res) => {
  console.log(req.params);
  const { pathToCreate } = req.params;
  const { nameFolder } = req.body;

  try {
    await fs.promises.mkdir(path.join(storage, nameFolder));
  } catch (error) {
    console.log(error);
  }

  return res.json({ msg: "ok ta" });
});

routes.get("/:pathToDownload/download", async (req, res) => {
  console.log(req.params);
  const { pathToDownload } = req.params;
  const file = path.join(storage, pathToDownload);
  console.log(file);

  try {
    const mimetype = mime.lookup(file);
    console.log(mimetype);
    res.setHeader("Content-Disposition", `attachment; filename=${file}`);
    res.setHeader("Content-Type", mimetype);
    res.download(file);
  } catch (error) {
    console.log(error);
  }
});

module.exports = routes;
