import { NextFunction, Request, Response } from 'express'
import { assert } from 'is-any-type'
import { Base64 } from 'js-base64'

export const grantAuth = (...roles: string[]) => {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			const grantToken = req.headers.grant as string

			if (assert.isUndefined(grantToken as any)) {
				throw { message: 'grantToken required' }
			} else {
				if (Base64.isValid(grantToken)) {
					const decoded: string = Base64.decode(grantToken)
					if (roles.includes(decoded)) {
						next()
					} else {
						throw { message: 'grantToken not valid' }
					}
				} else {
					throw { message: 'grantToken not valid' }
				}
			}
		} catch (error: any) {
			return res.status(401).json({
				error: 'GRANT_AUTHORIZATION_ERROR',
				code: 401,
				message: error.message
			})
		}
	}
}
