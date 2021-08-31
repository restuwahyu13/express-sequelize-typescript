import { Request, Response } from 'express'
import { checkSchema } from 'express-validator'
import { assert } from 'is-any-type'
import { UploadApiResponse, cloudStorage } from '../../helpers/cloudStorage.helpers'
import { User } from '../../models/user.model'

export const updateController = async (req: Request, res: Response): Promise<any> => {
	try {
		const checkUser = await User.findByPk(req.params.id)

		if (assert.isNull(checkUser as any)) {
			throw { error: 'UPDATE_USER_ERROR', code: 404, message: `User data not found for this id ${req.params.id}` }
		}

		const data: UploadApiResponse[] = []

		for (const file of req.files as any[]) {
			try {
				const response = (await cloudStorage(file.path)) as UploadApiResponse
				data.push(response)
			} catch (error: any) {
				throw { error: 'UPDATE_USER_ERROR', code: 400, message: 'Uploading file failed' }
			}
		}

		const updateUser = await User.update(
			{
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
				role: req.body.role,
				photo: data[0].secure_url,
				personalInformation: '',
				workExperinces: '',
				document: ''
			},
			{ where: { id: req.params.id } }
		)

		if (assert.isNull(updateUser as any)) {
			throw { error: 'UPDATE_USER_ERROR', code: 403, message: 'Update user data failed' }
		}

		return res.status(200).json({ message: 'Update user data successfully' })
	} catch (error: any) {
		return res.status(error.code || 400).json(error)
	}
}

export const schemaUpdate = checkSchema({
	id: {
		in: 'params',
		notEmpty: true,
		isNumeric: true
	}
})
