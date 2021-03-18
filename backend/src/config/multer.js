const multer = require('multer')
const path = require('path')
const pathResolve = require('./path')

module.exports = {
  storage: multer.diskStorage({
    destination: async (req, file, cb) => {
      let url = `${req.params.owner}/` || ''
      url += req.params.path || ''

      const { absolute: dirPath } = pathResolve(url)

      cb(null, path.resolve(dirPath))
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  })
}
