const express = require('express')
const fs = require('fs')
const path = require('path')
const resolvePath = require('../../config/path')
const { create } = require('../../app/controllers/folderController')
const router = express.Router()

router.post('/:owner/:path?', async (req, res) => {
  const { absolute: dirPath } = resolvePath(req.params.path)
  const { nameFolder } = req.body

  if (!nameFolder) {
    return res.status(400).json({
      message: 'Nome não especificado'
    })
  }

  try {
    await fs.promises.mkdir(path.join(dirPath, nameFolder))
  } catch (error) {
    console.log(error)
  }

  await create({
    owner: req.params.owner,
    path: dirPath,
    name: nameFolder
  })

  return res.status(201).json({ message: 'Criado com sucesso!' })
})

module.exports = router
