import { IUser } from '@schemas/UserSchema'
import * as Joi from 'joi'

export default class CreateUserValidation {
  public static validate(body: IUser): void | { message: string } {
    const schema = Joi.object<IUser>({
      username: Joi.string().required(),
      password: Joi.string().required()
    })

    const { error } = schema.validate(body, { abortEarly: false })
    if (error) return { message: error.details[0].message }
  }
}
