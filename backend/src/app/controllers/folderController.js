const Folder = require("../models/folder")

module.exports= {
  find: () => {},
  create: async (params)=> {
    return await Folder.create(params)
  }
}