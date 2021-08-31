import { NextFunction, Request, Response } from 'express'
import { Result, validationResult } from 'express-validator'

export const validator = (req: Request, res: Response, next: NextFunction): any => {
	const result: Result = validationResult(req)

	if (!result.isEmpty()) {
		res.status(400).json({
			error: 'VALIDATION_ERROR',
			code: 400,
			message: 'Sending data failed',
			data: result.array()
		})
	} else {
		next()
	}
}
