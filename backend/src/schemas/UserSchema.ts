import { model, Schema } from 'mongoose'
import * as bcrypt from 'bcrypt'

export interface IUser {
  username: string
  password: string
}

const UserSchema: Schema = new Schema<IUser>(
  {
    username: { type: String, required: true, trim: true },
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
