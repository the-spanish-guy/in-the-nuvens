const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema(
  {
    owner: { type: String, required: true },
    favorite: { type: String, required: true },
    path: { type: String, required: true},
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("Files", FileSchema);
