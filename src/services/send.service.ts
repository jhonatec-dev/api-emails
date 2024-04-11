import { type Email } from '../interfaces/Email'
import type ServiceResult from '../interfaces/ServiceResult'
import userModel from '../models/user.model'
import mailerService from './mailer.service'

class SendService {
  private async isUserValid (email: string): Promise<boolean> {
    try {
      const response = await userModel.model.findOne({ email })
      if (response === null) {
        return false
      }
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  async sendEmail (fields: Email): Promise<ServiceResult<unknown>> {
    try {
      const isUserValid = await this.isUserValid(fields.from)
      if (!isUserValid) {
        throw new Error('Invalid user')
      }
      const response = await mailerService.sendMail(fields)
      return response
    } catch (error) {
      return {
        status: 'UNAUTHORIZED',
        data: { message: (error as Error).message }
      }
    }
  }
}

export default new SendService()
