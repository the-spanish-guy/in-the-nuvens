const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", require("./routes/list"));
app.use("/create", require("./routes/create"));
app.use("/upload", require("./routes/upload"));
app.use("/download", require("./routes/download"));

app.use(require("./middlewares/enoent"));

module.exports = app;
