import { EmailSchema } from '@interfaces/Email'
import { type NextFunction, type Request, type Response } from 'express'

class SendValidator {
  async validateSend (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { body } = req
      console.log('validando body -->', body)
      EmailSchema.parse(body)
      next()
    } catch (error) {
      res.status(400).json({ error })
    }
  }
}

export default new SendValidator()
