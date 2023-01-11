import UserModel, { IUser } from '@schemas/UserSchema'

class UserService {
  public async store(body: IUser): Promise<IUser> {
    return await UserModel.create(body)
  }

  public async index(): Promise<IUser[]> {
    const users = await UserModel.find({})

    return users
  }

  public async show(id: string): Promise<IUser | null> {
    return await UserModel.findOne({ _id: id })
  }

  public async update(id: string, body: Partial<IUser>): Promise<IUser> {
    const user = await UserModel.findByIdAndUpdate(
      { _id: id },
      { ...body },
      { new: true }
    )

    return user
  }

  public async delete(id: string): Promise<IUser> {
    return await UserModel.findByIdAndDelete({ _id: id })
  }
}

export default new UserService()
