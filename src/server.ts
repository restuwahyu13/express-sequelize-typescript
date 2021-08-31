import 'dotenv/config'
import http from 'http'
import express, { Express } from 'express'
import { databaseConnection } from './configs/connection.config'
import { pluginMiddleware } from './middlewares/plugin.middleware'
import { routeMiddleware } from './middlewares/route.middleware'
import { User } from './models/user.model'

// initalize app here
const app = express() as Express
const server = http.createServer(app)

// initialize database connection here
databaseConnection(User)

// initialize all middleware here
pluginMiddleware(app)
routeMiddleware(app)

// listening server port here
server.listen(process.env.PORT, () => {
	if (process.env.NODE_ENV !== 'production') console.info(`server is running on port ${process.env.PORT}`)
})
