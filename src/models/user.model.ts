import type { User } from '@interfaces/Users'
import { Schema, model, type Model } from 'mongoose'

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
        required: true
      }
    })
    this.model = model<User>('User', UserSchema)
  }
}

export default new UserModel()
