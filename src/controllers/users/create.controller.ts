import { Request, Response } from 'express'
import { assert } from 'is-any-type'
import { UploadApiResponse, cloudStorage } from '../../helpers/cloudStorage.helpers'
import { User } from '../../models/user.model'

export const createController = async (req: Request, res: Response): Promise<any> => {
	try {
		const checkUser = await User.findOne({ where: { email: req.body.email } })

		if (!assert.isNull(checkUser as any)) {
			throw { error: 'CREATE_USER_ERROR', code: 409, message: 'Email already taken' }
		}

		const data: UploadApiResponse[] = []

		for (const file of req.files as any[]) {
			try {
				const response = (await cloudStorage(file.path)) as UploadApiResponse
				data.push(response)
			} catch (error: any) {
				throw { error: 'CREATE_USER_ERROR', code: 400, message: 'Uploading file failed' }
			}
		}

		const saveUser = await User.create({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			role: req.body.role,
			photo: data[0].secure_url,
			personalInformation: '',
			workExperinces: '',
			document: ''
		})

		if (assert.isNull(saveUser as any)) {
			throw { error: 'CREATE_USER_ERROR', code: 403, message: 'Create user data failed' }
		}

		return res.status(201).json({ message: 'Create user data successfully' })
	} catch (error: any) {
		return res.status(error.code || 400).json(error)
	}
}
