import { Request, Response } from 'express'
import { checkSchema } from 'express-validator'
import { assert } from 'is-any-type'
import { User } from '../../models/user.model'

export const deleteController = async (req: Request, res: Response): Promise<any> => {
	try {
		const checkUser = await User.findByPk(req.params.id)

		if (assert.isNull(checkUser as any)) {
			throw { error: 'DELETE_USER_ERROR', code: 404, message: `User data not found for this id ${req.params.id}` }
		}

		const deleteUser = await User.destroy({ where: { id: req.params.id } })

		if (assert.isNull(deleteUser as any)) {
			throw { error: 'DELETE_USER_ERROR', code: 404, message: 'Delete user data failed' }
		}

		return res.status(200).json({ message: 'Delete user data successfully' })
	} catch (error: any) {
		return res.status(error.code || 400).json(error)
	}
}

export const schemaDelete = checkSchema({
	id: {
		in: 'params',
		notEmpty: true,
		isNumeric: true
	}
})
