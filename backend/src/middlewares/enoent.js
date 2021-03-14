const enoent = (err, req, res, next) => {
  if (err.code !== "ENOENT") return;

  res.status(404).send("Arquivo ou pasta não encontrado");
  next();
};

module.exports = enoent;
