const express = require('express')
const mime = require('mime-types')
const resolvePath = require('../../config/path')
const router = express.Router()

router.get('/:path', async (req, res) => {
  const { path } = req.params
  const { absolute: file } = resolvePath(path)

  try {
    const mimetype = mime.lookup(file)
    res.setHeader('Content-Disposition', `attachment; filename=${file}`)
    res.setHeader('Content-Type', mimetype)
    res.download(file)
  } catch (error) {
    console.log(error)
    throw error
  }
})

module.exports = router
