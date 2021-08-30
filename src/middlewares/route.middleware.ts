import { Application } from 'express'
import authRoute from '../routes/auth.route'

export const routeMiddleware = (app: Application): void => {
	app.use('/api', authRoute)
}
