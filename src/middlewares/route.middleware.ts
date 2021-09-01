import { Application, Request, Response } from 'express'
import authRoute from '../routes/auth.route'
import userRoute from '../routes/user.route'

export const routeMiddleware = (app: Application): void => {
	app.use('/api', authRoute)
	app.use('/api', userRoute)
	app.get('/', (req: Request, res: Response) => {
		return res.status(200).json({ message: 'Ping Backend' })
	})
}
