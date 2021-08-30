import { UploadApiResponse, v2 as cloudinary } from 'cloudinary'

export { UploadApiResponse }

export const cloudStorage = (filename: string): any => {
	return new Promise((resolve, reject) => {
		cloudinary.config({
			cloud_name: process.env.CLOUDINARY_NAME,
			api_key: process.env.CLOUDINARY_API_KEY,
			api_secret: process.env.CLOUDINARY_API_SECRET,
			shorten: true,
			secure: process.env.NODE_ENV !== 'production' ? false : true,
			ssl_detected: process.env.NODE_ENV !== 'production' ? false : true
		})

		cloudinary.uploader
			.upload(filename, { resource_type: 'auto' })
			.then((response: UploadApiResponse) => resolve(response))
			.catch((error) => reject(error))
	})
}
