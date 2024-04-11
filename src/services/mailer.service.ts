import dayjs from 'dayjs'
import { configDotenv } from 'dotenv'
import nodemailer from 'nodemailer'
import { type Email } from '../interfaces/Email'
import type ServiceResult from '../interfaces/ServiceResult'

configDotenv()

const user = process.env.EMAIL_USER ?? 'USER'
const pass = process.env.EMAIL_PASS ?? 'PASSWORD'

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
      console.log('USER, PASS \n\n', user, pass, '\n\n\n')

      await this.transporter.sendMail({
        from: user,
        to: fields.to,
        subject: fields.subject,
        html: fields.body
      })
      return {
        status: 'SUCCESS',
        data: {
          message: 'Email sent successfully',
          date: dayjs().format('YYYY-MM-DD HH:mm:ss')
        }
      }
    } catch (error) {
      console.error('error no SENDMAIL', error)
      console.log('error no SENDMAIL', error)
      return {
        status: 'INVALID',
        data: { message: (error as Error).message }
      }
    }
  }
}

export default new MailerService()
