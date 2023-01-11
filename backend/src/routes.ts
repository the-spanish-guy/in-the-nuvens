import { Router } from 'express'

import { validateId } from '@middlewares/Id'
import UserController from '@controllers/UserController'
import ShouldDeployController from '@controllers/ShouldDeployController'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.get('/users/:id', validateId, UserController.show)
routes.put('/users/:id', validateId, UserController.update)
routes.delete('/users/:id', validateId, UserController.delete)

routes.get('/deploy', ShouldDeployController.index)

export default routes
