import { Request, Response } from 'express'
import { checkSchema } from 'express-validator'
import { assert } from 'is-any-type'
import { User } from '../../models/user.model'

export const resultController = async (req: Request, res: Response): Promise<any> => {
	try {
		const checkUser = await User.findByPk(req.params.id)

		if (assert.isNull(checkUser as any)) {
			throw { error: 'RESULT_USER_ERROR', code: 404, message: 'User data not found' }
		}

		return res.status(200).json({ message: 'Success', data: checkUser })
	} catch (error: any) {
		return res.status(error.code || 400).json(error)
	}
}

export const schemaResult = checkSchema({
	id: {
		in: 'params',
		notEmpty: true,
		isNumeric: true
	}
})
