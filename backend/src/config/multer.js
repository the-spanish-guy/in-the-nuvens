const multer = require('multer')
const path = require('path')
const { formatUrl } = require('../utils/utils')
const pathResolve = require('./path')

module.exports = {
  storage: multer.diskStorage({
    destination: async (req, file, cb) => {
      const { absolute: dirPath } = pathResolve(
        formatUrl(req.params.owner, req.params.path)
      )

      cb(null, path.resolve(dirPath))
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  })
}
