const express = require('express')
const cors = require('cors')
require('./config/mongoConnection')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', require('./routes/foldersAndFiles/list'))
app.use('/create', require('./routes/foldersAndFiles/create'))
app.use('/upload', require('./routes/foldersAndFiles/upload'))
app.use('/download', require('./routes/foldersAndFiles/download'))
app.use('/user', require('./routes/users/create'))
app.use('/login', require('./routes/users/login'))

app.use(require('./middlewares/enoent'))

module.exports = app
