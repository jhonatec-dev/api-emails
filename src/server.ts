/* eslint-disable @typescript-eslint/no-unsafe-argument */
import cors from 'cors'
import dayjs from 'dayjs'
import { configDotenv } from 'dotenv'
import express, { type Application } from 'express'
import 'module-alias/register'
import mongoose from 'mongoose'
import swaggerUi from 'swagger-ui-express'
import sendRoutes from './routes/send.routes'
import swaggerDocs from './swagger.json'

configDotenv()

const password = process.env.MONGO_PASSWORD
const user = process.env.MONGO_USER
const collection = process.env.MONGO_COLLECTION
const uri = encodeURI(
  `mongodb+srv://${user}:${password}@cluster0.y63pkr8.mongodb.net/${collection}?retryWrites=true&w=majority`
)
const port = process.env.PORT

const today = dayjs().format('DD/MM/YYYY HH:mm:ss')

const app: Application = express()

async function startServer (): Promise<void> {
  try {
    await mongoose.connect(uri, {
      dbName: collection
    })

    app.use(express.json())
    app.use(cors())
    app.use(sendRoutes)
    app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`)
    })
  } catch (error) {
    console.log(today, 'Erro no servidor MONGO:', error)
  }
}

startServer().catch((error) => {
  console.error(today, 'Erro no servidor:', error)
})
