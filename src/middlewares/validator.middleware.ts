import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

export const validator = (req: Request, res: Response): Array<Record<string, any>> | undefined => {
	const messages: Array<Record<string, any>> = []
	const errors = validationResult(req)

	if (errors.isEmpty()) {
		for (const i of errors.array()) {
			messages.push(i)
		}
		return messages
	}
}
