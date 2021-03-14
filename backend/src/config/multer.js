const multer = require("multer");
const path = require("path");
const pathResolve = require("./path");

module.exports = {
  storage: multer.diskStorage({
    destination: async (req, file, cb) => {
      const { absolute: dirPath } = pathResolve(req.params.path);
      cb(null, path.resolve(dirPath));
    },
    filename: (req, file, cb) => {
      const extname = path.extname(file.originalname);
      const name = path.basename(file.originalname, extname);
      cb(null, file.originalname);
    },
  }),
};
