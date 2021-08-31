import crypto from 'crypto-js'
import { NextFunction, Request, Response } from 'express'
import { assert } from 'is-any-type'
import { Base64 } from 'js-base64'
import { decodeToken } from '../helpers/jwt.helpers'

export const grandAuth = (...roles: string[]) => {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			const grantToken = req.headers.grand as string

			if (assert.isUndefined(grantToken as any)) {
				throw { message: 'grantToken required' }
			} else {
				if (Base64.isValid(grantToken)) {
					const decoded: string = crypto.AES.decrypt(grantToken, process.env.CRYPTO_SECRET as string).toString(crypto.enc.Utf8)
					const parseData = JSON.parse(decoded) as Record<string, any>
					const jwtDecoded: Record<string, any> = decodeToken((req.headers.authorization as string).split(' ')[1])

					if (roles.includes((parseData as any).role) && (parseData as any).email === (jwtDecoded as any).email) {
						next()
					} else {
						throw { message: 'Role not allowed' }
					}
				} else {
					throw { message: 'grandToken not valid' }
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
