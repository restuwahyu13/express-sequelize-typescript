import { Request, Response } from 'express'
import { checkSchema } from 'express-validator'
import { assert } from 'is-any-type'
import { verifyPassword } from '../../helpers/bcrypt.helper'
import { grandToken } from '../../helpers/grand.helper'
import { signinToken } from '../../helpers/jwt.helpers'
import { User } from '../../models/user.model'

export const loginController = async (req: Request, res: Response): Promise<any> => {
	try {
		const checkUser = await User.findOne({ where: { email: req.body.email } })

		if (assert.isNull(checkUser as any)) {
			throw { error: 'AUTH_LOGIN_ERROR', code: 404, message: 'Email not never registered' }
		}

		const comparePassword = verifyPassword(req.body.password, (checkUser as User).password)

		if (!comparePassword) {
			throw { error: 'AUTH_LOGIN_ERROR', code: 400, message: 'Username or password wrong' }
		}

		const jwtAccessToken: string = signinToken({ email: req.body.email })
		const grantAccessToken: string = grandToken({ email: req.body.email, role: (checkUser as User).role })

		if (assert.isUndefined(jwtAccessToken as any) || assert.isUndefined(grantAccessToken as any)) {
			throw { error: 'AUTH_LOGIN_ERROR', code: 400, message: 'Generate token failed' }
		}

		return res.status(200).json({ message: 'Login successfully', accessToken: jwtAccessToken, grantToken: grantAccessToken })
	} catch (error: any) {
		return res.status(error.code || 400).json(error)
	}
}

export const schemaLogin = checkSchema({
	email: {
		in: 'body',
		isEmail: true,
		notEmpty: true
	},
	password: {
		in: 'body',
		isString: true,
		notEmpty: true
	}
})
