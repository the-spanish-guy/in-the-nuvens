import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'

import routes from './routes'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()

    this.middleware()
    this.mongo()
    this.routes()
  }

  private middleware(): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(function (request, response, next) {
      response.header('Access-Control-Allow-Origin', '*')
      next()
    })
  }

  private mongo(): void {
    mongoose.set('strictQuery', true)
    mongoose.connect(String(process.env.MONGO_URI))
  }

  private routes(): void {
    this.express.use(routes)
  }
}

export default new App().express
