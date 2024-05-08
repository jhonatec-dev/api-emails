// import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
// import userModel from '../../../models/user.model'
// import mailerService from '../../../services/mailer.service'
// import sendService from '../../../services/send.service'
// import { usersMock } from '../../mocks/user.mock'

// describe('sendService', () => {
//   beforeEach(() => {
//     vi.spyOn(userModel.model, 'findOne').mockImplementation(async (query) => {
//       const email = query?.email
//       const user = usersMock.find((user) => user.email === email)
//       return await Promise.resolve(user)
//     })
//   })

//   afterEach(() => {
//     vi.clearAllMocks()
//     vi.resetAllMocks()
//   })

//   it('should return ServiceError on invalidUSer', async () => {
//     const failReq = {
//       from: 'emailqualquer@mail.com',
//       to: ['mail@mail.com'],
//       subject: 'subject',
//       body: 'body'
//     }
//     const { status, data } = await sendService.sendEmail(failReq)

//     expect(status).toBe('UNAUTHORIZED')
//     expect(data).toEqual({ message: 'Invalid user' })
//   })

//   it('should return ServiceResult on validUser', async () => {
//     vi.spyOn(mailerService, 'sendMail').mockResolvedValue({
//       status: 'SUCCESS',
//       data: { message: 'Email sent' }
//     })
//     const successReq = {
//       from: usersMock[0].email,
//       to: ['mail@mail.com', 'mail2@mail.com'],
//       subject: 'subject',
//       body: 'body'
//     }
//     const { status, data } = await sendService.sendEmail(successReq)
//     expect(status).toBe('SUCCESS')
//     expect(data).toEqual({ message: 'Email sent' })
//   })
// }) // describe
