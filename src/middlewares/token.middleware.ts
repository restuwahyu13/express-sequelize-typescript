import { NextFunction, Request, Response } from 'express'
import { assert } from 'is-any-type'
import { verifyToken } from '../helpers/jwt.helpers'

export const tokenAuth = () => {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			const tokenHeader: string = req.headers.authorization as string

			if (assert.isUndefined(tokenHeader as any)) {
				throw { message: 'accessToken required' }
			} else {
				const accessToken: string = tokenHeader.split('Bearer ')[0]
				const decodedToken = verifyToken(accessToken as any, (error: any, decoded: Record<string, any>): any => {
					if (!error) return decoded
					else return null
				})

				if (assert.isNull(decodedToken as any)) {
					throw { message: 'accessToken expired' }
				} else {
					;(req as any).userData = decodedToken
					next()
				}
			}
		} catch (error: any) {
			return res.status(403).json({
				error: 'TOKEN_UNAUTHORIZED_ERROR',
				code: 401,
				message: error.message
			})
		}
	}
}
