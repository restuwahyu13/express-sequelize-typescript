import crypto from 'crypto-js'

export const grandToken = (payload: Record<string, any>): string => {
	return crypto.AES.encrypt(JSON.stringify({ ...payload }), process.env.CRYPTO_SECRET as string).toString()
}
