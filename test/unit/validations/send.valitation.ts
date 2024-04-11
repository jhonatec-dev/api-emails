// import { type NextFunction, type Request, type Response } from 'express'
// import { ZodError } from 'zod'
// import { EmailSchema } from '../interfaces/Email'

// class SendValidator {
//   async validateSend (
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ): Promise<void> {
//     try {
//       const { body } = req
//       // console.log('validando body -->', body)
//       EmailSchema.parse(body)
//       next()
//     } catch (error) {
//       if (error instanceof ZodError) {
//         const messages = error.errors.map((err) => {
//           return {
//             message: err.message,
//             path: err.path.join('.')
//           }
//         })
//         res.status(400).json({ messages })
//       } else res.status(400).json({ error })
//     }
//   }
// }

// export default new SendValidator()
