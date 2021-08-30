import { envConfig } from '../configs/env.config'
;(async () => {
	for (let i = 0; i < Object.keys(envConfig).length; i++) {
		process.env[Object.keys(envConfig)[i]] = Object.values(envConfig)[i] as string
	}
})()
