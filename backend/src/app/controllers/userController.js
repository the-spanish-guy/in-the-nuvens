const usuario = require("../models/user")

module.exports = {
  findbyUserName: async (username) => {
    await usuario.findOne({ username })
  },
  create: async (params) => {
    await usuario.create(params)
  }
}