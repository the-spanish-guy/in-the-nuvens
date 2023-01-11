import { model, Schema } from 'mongoose'
import * as bcrypt from 'bcrypt'

export interface IUser {
  name: string
  login: string
  email: string
  password: string
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    login: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true }
  },
  {
    timestamps: true
  }
)

UserSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, 10)

  next()
})

export default model<IUser>('User', UserSchema)
