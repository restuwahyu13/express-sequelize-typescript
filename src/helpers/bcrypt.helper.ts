import bcryptjs from 'bcryptjs'

export const hashPassword = (password: string): string => {
	return bcryptjs.hashSync(password, bcryptjs.genSaltSync(10))
}

export const verifyPassword = (password: string, encrypted: string): boolean => {
	return bcryptjs.compareSync(password, encrypted)
}
