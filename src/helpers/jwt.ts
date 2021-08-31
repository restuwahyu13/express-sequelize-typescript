import jwt from 'jsonwebtoken'

export const signinToken = (payload: Record<string, any>): string => {
	return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1d' })
}

export const verifyToken = (token: string, encrypted: string, cb: any): void => {
	jwt.verify(token, process.env.JWT_SECRET as string, cb)
}

export const decodeToken = (token: string): any => {
	return jwt.decode(token)
}
