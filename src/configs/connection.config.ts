import { Sequelize } from 'sequelize-typescript'

export const databaseConnection = async (...modelSchemas: any[]): Promise<void> => {
	try {
		const sequelize = new Sequelize(
			process.env.MYSQL_DATABASE as string,
			process.env.MYSQL_USER as string,
			process.env.MYSQL_PASSWORD as string,
			{
				host: process.env.MYSQL_HOST,
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
			}
		)

		await sequelize.authenticate()
		await sequelize.sync({ force: true })

		console.info('database connected')
	} catch (error) {
		console.error('database not connected')
	}
}
