import http from 'http'
import app from './src/app'

// initialize instance server here
const server = http.createServer(app)

// listening server port here
server.listen(process.env.PORT, () => {
	if (process.env.NODE_ENV !== 'production') console.info(`server is running on port ${process.env.PORT}`)
})
