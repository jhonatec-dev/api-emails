import { Router, type Request, type Response } from 'express'

class SendRoutes {
  router: Router

  constructor () {
    this.router = Router()
    this.routes()
  }

  routes (): void {
    this.router.get('/send', (req: Request, res: Response) => {
      res.send('Working!')
    })

    this.router.post('/send', (req: Request, res: Response) => {
      const { body } = req
      console.log(body)
      res.send('Working!')
    })
  }

  getRoutes (): Router {
    return this.router
  }
}

export default new SendRoutes().getRoutes()
