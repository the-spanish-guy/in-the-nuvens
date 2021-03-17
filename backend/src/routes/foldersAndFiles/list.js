const express = require("express");
const fs = require("fs");
const resolvePath = require("../../config/path");
const router = express.Router();

router.get("/:path?", async (req, res, next) => {
  const { absolute, relative } = resolvePath(req.params.path);

  const listDir = await fs.promises.opendir(absolute).catch((err) => {
    next(err);
    throw err;
  });
  const content = { files: [], folders: [] };
  for await (const contentDir of listDir) {
    if (contentDir.isDirectory()) {
      content.folders.push(contentDir.name);
    }
    if (contentDir.isFile()) {
      content.files.push(contentDir.name);
    }
  }

  return res.status(200).json(content);
});

module.exports = router;
