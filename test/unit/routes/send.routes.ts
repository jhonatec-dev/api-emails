// /* eslint-disable @typescript-eslint/unbound-method */
// /* eslint-disable @typescript-eslint/no-unsafe-argument */
// /* eslint-disable @typescript-eslint/no-misused-promises */
// import { Router, type Request, type Response } from 'express'
// import sendController from '../controllers/send.controller'
// import sendValitation from '../validations/send.valitation'

// class SendRoutes {
//   private readonly router = Router()

//   constructor () {
//     this.routes()
//   }

//   routes (): void {
//     this.router.get('/send', (req: Request, res: Response) => {
//       res.send('Working!')
//     })

//     this.router.post(
//       '/send',
//       sendValitation.validateSend,
//       async (req: Request, res: Response) => {
//         await sendController.send(req, res)
//       }
//     )
//   }

//   getRoutes (): Router {
//     return this.router
//   }
// }

// export default new SendRoutes().getRoutes()
