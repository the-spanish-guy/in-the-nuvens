const multer = require("multer");
const path = require("path");
const storage = require("./storage");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(storage),
    filename: (req, file, cb) => {
      const extname = path.extname(file.originalname);
      const name = path.basename(file.originalname, extname);
      cb(null, `${name}-${Date.now()}${extname}`);
    },
  }),
};
