import { Request, Response } from 'express'
import UserService from '@services/UserService'
import { HttpStatus } from '@utils/HttpStatus'

class UserController {
  public async index(request: Request, repsonse: Response): Promise<Response> {
    console.log('teste')
    const users = await UserService.index()
    return repsonse.json(users)
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const user = await UserService.store(request.body)
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
