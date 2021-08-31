import { Application } from 'express'
import authRoute from '../routes/user.route'

export const routeMiddleware = (app: Application): void => {
	app.use('/api', authRoute)
}
