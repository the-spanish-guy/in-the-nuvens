import { Router } from 'express'

import { validateId } from '@middlewares/Id'
import UserController from '@controllers/UserController'

const routes = Router()

// use middleware to validate id
// routes.get('/users/:id', validateId, UserController.show)

routes.post('/users', UserController.create)

export default routes
