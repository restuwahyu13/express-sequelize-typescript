import { Request, Response } from 'express'
import { User } from '../../models/user.model'

export const resultsController = async (req: Request, res: Response): Promise<any> => {
	try {
		const checkUsers = await User.findAll({ order: [['createdAt', 'DESC']] })

		if (!checkUsers.length) {
			throw { error: 'RESULTS_USER_ERROR', code: 404, message: 'User data not found' }
		}

		return res.status(200).json({ message: 'Success', data: checkUsers })
	} catch (error: any) {
		return res.status(error.code || 400).json(error)
	}
}
