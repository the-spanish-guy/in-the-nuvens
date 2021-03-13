require("dotenv").config();

const storage = process.env.FILE_STORAGE;
if (!storage) {
  console.error("Storage path not defined,");
  process.exit(1);
}

module.exports = storage;
