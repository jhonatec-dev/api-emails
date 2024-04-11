// import { type Request, type Response } from 'express'
// import { type Email } from '../interfaces/Email'
// import sendService from '../services/send.service'
// import { mapStatusHTTP } from '../utils/mapStatusHTTP.test'
// // import { mapStatusHTTP } from '@utils/mapStatusHTTP'

// class SendController {
//   async send (req: Request, res: Response): Promise<void> {
//     const { body } = req
//     const { status, data } = await sendService.sendEmail(body as Email)
//     res.status(mapStatusHTTP(status)).json(data)
//   }
// }

// export default new SendController()
