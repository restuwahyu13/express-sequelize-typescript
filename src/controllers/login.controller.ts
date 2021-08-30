import { Request, Response } from 'express'
import { checkSchema } from 'express-validator'
import { assert } from 'is-any-type'
import { verifyPassword } from '../helpers/bcrypt'
import { signinToken } from '../helpers/jwt'
import { User } from '../models/user.model'

export const loginController = async (req: Request, res: Response): Promise<any> => {
	try {
		const checkUser = await User.findOne({ where: { email: req.body.email } })

		if (!assert.isNull(checkUser as any)) {
			throw { error: 'USER_LOGIN_ERROR', code: 404, message: 'Email not never registered' }
		}

		const comparePassword = verifyPassword(req.body.password, (checkUser as User).password)

		if (!comparePassword) {
			throw { error: 'USER_LOGIN_ERROR', code: 400, message: 'Username or password wrong' }
		}

		const accessToken = signinToken({ email: req.body.email })

		if (assert.isUndefined(accessToken as any)) {
			throw { error: 'USER_LOGIN_ERROR', code: 400, message: 'Generate accessToken failed' }
		}

		return res.status(200).json({ message: 'Login successfully', accessToken })
	} catch (error: any) {
		return res.status(error.code).json(error)
	}
}

export const schemaLoginController = checkSchema({
	email: {
		in: 'body',
		isEmail: true,
		notEmpty: true
	},
	password: {
		in: 'body',
		isString: true,
		notEmpty: true,
		isLength: {
			options: { min: 8 }
		}
	}
})
