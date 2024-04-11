/* eslint-disable @typescript-eslint/unbound-method */
import { configDotenv } from 'dotenv'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import mailerService from '../../../src/services/mailer.service'

configDotenv()
const userENV = process.env.EMAIL_USER ?? 'USER'

describe('sendService', () => {
  beforeEach(() => {
    // vi.spyOn(dayjs(), 'format').mockReturnValue(dateMocked)
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  it('should return Sucess con a simple request', async () => {
    vi.spyOn(mailerService.transporter, 'sendMail').mockImplementation(() => {
      throw new Error('Error')
    })
    const req = {
      from: 'emailqualquer@mail.com',
      to: ['mail@mail.com'],
      subject: 'subject',
      body: 'body'
    }
    const { status, data } = await mailerService.sendMail(req)
    // expect(mailerService.transporter.sendMail).toHaveBeenCalled()
    expect(status).toBe('INVALID')
    expect(data).to.have.property('message')
  })

  it('should return Sucess con a simple request', async () => {
    const req = {
      from: 'emailqualquer@mail.com',
      to: ['mail@mail.com'],
      subject: 'subject',
      body: 'body'
    }
    const { status, data } = await mailerService.sendMail(req)
    expect(mailerService.transporter.sendMail).toHaveBeenCalledTimes(1)
    expect(mailerService.transporter.sendMail).toHaveBeenCalledWith({
      from: userENV,
      to: req.to,
      subject: req.subject,
      html: req.body
    })

    expect(status).toBe('SUCCESS')
    expect(data).to.deep.eq({
      message: 'Email sent successfully'
    })
  })

  it('should return Sucess and send a copy when requested', async () => {
    const req = {
      from: 'emailqualquer@mail.com',
      to: ['mail@mail.com'],
      subject: 'subject',
      body: 'body',
      copy: true
    }
    const { status, data } = await mailerService.sendMail(req)
    expect(mailerService.transporter.sendMail).toHaveBeenCalledTimes(1)
    expect(mailerService.transporter.sendMail).toHaveBeenCalledWith({
      from: userENV,
      to: [...req.to, req.from],
      subject: req.subject,
      html: req.body
    })

    expect(status).toBe('SUCCESS')
    expect(data).to.deep.eq({
      message: 'Email sent successfully'
    })
  })
}) // describe
