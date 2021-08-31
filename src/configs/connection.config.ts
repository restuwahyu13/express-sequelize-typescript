import { Sequelize } from 'sequelize-typescript'

export const databaseConnection = (...modelSchemas: any[]): any => {
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
				logQueryParameters: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' ? true : false,
				storage: ':memory:',
				models: modelSchemas
			}
		)

		console.log('database connected')

		return sequelize
	} catch (error) {
		console.error('database not connected')
	}
}
