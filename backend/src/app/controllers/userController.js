const usuario = require("../models/user")

module.exports = {
  findbyUserName: async (username) => {
    return await usuario.findOne({ username })
  },
  create: async (params) => {
    return  await usuario.create(params)
  }
}