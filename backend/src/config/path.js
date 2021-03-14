const path = require("path");
const storage = require("./storage");

const resolvePath = (url) => {
  const relative = !url ? "/" : url.replace(/--/g, "/");
  const absolute = path.join(storage, relative);

  return { absolute, relative };
};

module.exports = resolvePath;
