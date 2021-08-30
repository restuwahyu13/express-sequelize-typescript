import { Request, Response } from 'express'
import { checkSchema } from 'express-validator'
import { assert } from 'is-any-type'
import { UploadApiResponse, cloudStorage } from '../helpers/cloudStorage'
import { User } from '../models/user.model'

export const registerController = async (req: Request, res: Response): Promise<any> => {
	try {
		const checkUser = await User.findOne({ where: { email: req.body.email } })

		if (assert.isNull(checkUser as any)) {
			throw { error: 'USER_REGISTER_ERROR', code: 409, message: 'Email already taken' }
		}

		const data: UploadApiResponse[] = []
		const photo = (req.file as any).photo
		const document = (req.files as any).document
		const files: Array<Record<string, any>> = photo.concat(document)

		for (const file of files) {
			try {
				const response = (await cloudStorage(file.path)) as UploadApiResponse
				data.push(response)
			} catch (error: any) {
				throw { error: 'USER_REGISTER_ERROR', code: 400, message: 'Uploading file failed' }
			}
		}

		const saveUser = await User.create({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			personalInformation: {
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				birtDate: req.body.birtDate,
				bornDate: req.body.bornDate,
				address: req.body.address
			},
			workExperinces: req.body.workExperinces,
			photo: data[0].secure_url,
			document: data[1].secure_url
		})

		if (assert.isNull(saveUser as any)) {
			throw { error: 'USER_REGISTER_ERROR', code: 403, message: 'Create new user account failed' }
		}

		return res.status(201).json({})
	} catch (error: any) {
		return res.status(error.code).json(error)
	}
}

export const schemaLoginController = checkSchema({
	name: {
		in: 'body',
		isString: true,
		notEmpty: true
	},
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
	},
	firstName: {
		in: 'body',
		isString: true,
		notEmpty: true
	},
	lastName: {
		in: 'body',
		isString: true,
		notEmpty: true
	},
	birtDate: {
		in: 'body',
		isDate: true,
		notEmpty: true
	},
	bornDate: {
		in: 'body',
		isString: true,
		notEmpty: true
	},
	address: {
		in: 'body',
		isString: true,
		notEmpty: true
	},
	workExperinces: {
		in: 'body',
		isArray: true,
		notEmpty: true
	},
	photo: {
		in: 'body',
		isString: true,
		notEmpty: true
	},
	document: {
		in: 'body',
		isString: true,
		notEmpty: true
	}
})
