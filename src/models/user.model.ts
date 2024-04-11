import { Schema, model, type Model } from 'mongoose'
import type { User } from '../interfaces/Users'

class UserModel {
  public readonly model: Model<User>
  constructor () {
    const UserSchema = new Schema<User>({
      email: {
        type: String,
        required: true
      },
      active: {
        type: Boolean,
        required: true,
        default: true
      }
    })
    this.model = model<User>('User', UserSchema)
  }
}

export default new UserModel()
