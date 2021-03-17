const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ith", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
