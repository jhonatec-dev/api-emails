import { configDotenv } from 'dotenv'
import nodemailer from 'nodemailer'
import { type Email } from '../interfaces/Email'
import type ServiceResult from '../interfaces/ServiceResult'

configDotenv()

const user = process.env.EMAIL_USER ?? 'USER'
const pass = process.env.EMAIL_PASS ?? 'PASSWORD'

class MailerService {
  public readonly transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    service: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user,
      pass
    }
  })

  async sendMail (fields: Email): Promise<ServiceResult<unknown>> {
    try {
      const destine = [...fields.to]
      if (fields.copy === true) {
        destine.push(fields.from)
      }
      await this.transporter.sendMail({
        from: user,
        to: destine,
        subject: fields.subject,
        html: fields.body
      })
      return {
        status: 'SUCCESS',
        data: {
          message: 'Email sent successfully'
        }
      }
    } catch (error) {
      return {
        status: 'INVALID',
        data: { message: (error as Error).message }
      }
    }
  }
}

export default new MailerService()
