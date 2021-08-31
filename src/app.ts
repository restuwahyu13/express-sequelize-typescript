import 'dotenv/config'
import express, { Express } from 'express'
import { databaseConnection } from './configs/connection.config'
import { pluginMiddleware } from './middlewares/plugin.middleware'
import { routeMiddleware } from './middlewares/route.middleware'
import { User } from './models/user.model'

// initalize app here
const app = express() as Express

;(async () => {
	// initialize database connection here
	if (process.env.NODE_ENV !== 'test') {
		const sequelize = databaseConnection(User)
		await sequelize.authenticate()
		await sequelize.sync({ force: true })
	}

	// initialize all middleware here
	pluginMiddleware(app)
	routeMiddleware(app)
})()

export default app
