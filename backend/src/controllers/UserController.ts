import fs from 'fs'
import { Request, Response } from 'express'

import { HttpStatus } from '@utils/HttpStatus'
import UserService from '@services/UserService'
import { FolderService } from '@services/FolderService'
import CreateUserValidation from '@validations/CreateUserValidation'

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const validated = CreateUserValidation.validate(request.body)
    if (validated) response.json(validated)

    const user = await UserService.store(request.body)

    const { absolute } = new FolderService().resolvePath(user.id)

    await fs.promises.mkdir(absolute, { recursive: true })

    return response.json(user)
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const user = await UserService.show(String(id))

    if (!user) {
      return response
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'User not found' })
    }

    return response.json(user)
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const user = await UserService.update(String(id), request.body)

    return response.json(user)
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const user = await UserService.delete(String(id))

    return response.json(user)
  }
}

export default new UserController()
