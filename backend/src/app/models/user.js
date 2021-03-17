const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("User", UserSchema);
