const express = require("express");
const cors = require("cors");
require("./config/mongoConnection");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", require("./routes/foldersAndFiles/list"));
app.use("/user", require("./routes/foldersAndFiles/create"));
app.use("/create", require("./routes/foldersAndFiles/create"));
app.use("/upload", require("./routes/foldersAndFiles/upload"));
app.use("/download", require("./routes/foldersAndFiles/download"));

app.use(require("./middlewares/enoent"));

module.exports = app;
