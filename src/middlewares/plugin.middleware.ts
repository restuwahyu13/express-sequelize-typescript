import zlib from 'zlib'
import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import { Application } from 'express'
import helmnet from 'helmet'
import logger from 'morgan'

export const pluginMiddleware = (app: Application): void => {
	app.disable('x-powered-by')
	app.use(bodyParser.json())
	app.use(bodyParser({ extended: true }))
	app.use(
		compression({
			level: zlib.constants.Z_BEST_COMPRESSION,
			memLevel: zlib.constants.Z_BEST_COMPRESSION,
			strategy: zlib.constants.Z_RLE,
			chunkSize: 999999999,
			threshold: 999999999
		})
	)
	app.use(
		cors({
			origin: '*',
			allowedHeaders: ['Content-Type', 'Authorization', 'Host', 'Accept'],
			exposedHeaders: ['Content-Type', 'Authorization', 'Host', 'Accept'],
			methods: ['GET', 'POST', 'PUT', 'PATCH', 'PUT', 'DELETE'],
			credentials: true
		})
	)
	app.use(helmnet({ contentSecurityPolicy: false }))
	if (process.env.NODE_ENV !== 'production') app.use(logger('dev'))
}
