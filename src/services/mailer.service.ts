import { type Email } from '@interfaces/Email'
import type ServiceResult from '@interfaces/ServiceResult'
import dayjs from 'dayjs'
import { configDotenv } from 'dotenv'
import nodemailer from 'nodemailer'

const user = process.env.EMAIL_USER
const pass = process.env.EMAIL_PASS

configDotenv()

class MailerService {
  private readonly transporter = nodemailer.createTransport({
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
      await this.transporter.sendMail({
        from: fields.from,
        to: fields.to,
        subject: fields.subject,
        text: fields.body
      })
      return {
        status: 'SUCCESS',
        data: {
          message: 'Email sent successfully',
          date: dayjs().format('YYYY-MM-DD HH:mm:ss')
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
