import os from 'os'
import { resolve } from 'path'
import { Request } from 'express'
import { assert } from 'is-any-type'
import multer, { StorageEngine } from 'multer'

process.env.TMP_LIN = '/tmp'
process.env.TMP_WIN = `${process.env.TEMP}/`

const diskStorage: StorageEngine = multer.diskStorage({
	destination(req: Request, file: Record<string, any>, done): void {
		const TEMP_DIR: string | undefined = os.platform() === 'win32' ? process.env.TMP_WIN : process.env.TMP_LIN

		if (assert.isUndefined(file as any)) {
			done(new Error('Uploading error'), null as any)
		} else {
			done(null, resolve(TEMP_DIR as string))
		}
	},
	filename(req: any, file: any, done): void {
		done(null, file.originalname)
	}
})

const fileValidator = (req: any, file: any, done): void => {
	const extFile = file.originalname.replace('.', '')
	const extPattern = /(jpg|jpeg|png|gif|svg|doc)/giu.test(extFile)

	if (!extPattern) {
		done(new TypeError('File format not supported'), null as any)
	} else {
		done(null, true)
	}
}

export const upload = multer({ storage: diskStorage, limits: { fileSize: 1000000 }, fileFilter: fileValidator })
