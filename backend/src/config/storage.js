require("dotenv").config();

const storage = process.env.FILE_STORAGE;
if (!storage) {
  console.error("Pasta de armazenamento não definida");
  process.exit(1);
}

module.exports = storage;
