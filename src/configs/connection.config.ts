import { Sequelize } from 'sequelize-typescript'

let connection: Sequelize

export const databaseConnection = async (...modelSchemas: any[]): Promise<void> => {
	try {
		connection = new Sequelize({
			host: process.env.MYSQL_HOST,
			username: process.env.MYSQL_USERNAME,
			password: process.env.MYSQL_PASSWORD,
			database: process.env.MYSQL_DB,
			port: parseInt(process.env.MYSQL_PORT as string),
			dialect: 'mysql',
			pool: {
				min: process.env.NODE_ENV !== 'production' ? 5 : 10,
				max: process.env.NODE_ENV !== 'production' ? 10 : 20,
				idle: 15000,
				acquire: 30000
			},
			logQueryParameters: process.env.NODE_ENV !== 'production' ? true : false,
			storage: ':memory:',
			models: modelSchemas
		})

		await connection.authenticate()
		console.info('database connected')
	} catch (error: any) {
		console.info(`database not connected: ${error.message}`)
		await connection.close()
	}
}
