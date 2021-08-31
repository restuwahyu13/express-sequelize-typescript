import { Base64 } from 'js-base64'

export const grantToken = (role: string): string => {
	return Base64.encodeURI(role)
}
