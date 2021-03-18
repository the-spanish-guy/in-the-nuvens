const Files = require("../models/files")

module.exports= {
  find: () => {},
  create: async (params)=> {
    return await Files.create(params)
  }
}