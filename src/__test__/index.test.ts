import faker from 'faker'
import request from 'supertest'
import app from '../app'
import { databaseConnection } from '../configs/connection.config'
import { User } from '../models/user.model'

describe('API Test Driven Development', function () {
	const userData: any = {
		name: faker.internet.userName(),
		email: 'johndoe13@gmail.com',
		password: 'qwerty12',
		personalInformation: JSON.stringify({
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			birtDate: new Date(),
			bornDate: faker.address.city(),
			address: faker.address.streetAddress()
		}),
		workExperinces: JSON.stringify([
			{
				companyName: faker.company.companyName(),
				jobsPosition: 'programmer',
				startWork: new Date('2018/03/01'),
				endWork: new Date('2020/03/01'),
				jobsDescription: 'Lorem Ipsum'
			}
		]),
		photo: faker.image.people(),
		document: faker.image.people()
	}

	beforeAll(async () => {
		const sequelize = databaseConnection(User)
		await sequelize.sync({ force: true })
	})

	it('Should be login success', async () => {
		await User.create(userData)

		const res = await request(app).post('/api/auth/login').send({ email: 'johndoe13@gmail.com', password: 'qwerty12' })
		expect(res.statusCode).toEqual(200)
		expect(res.body.message).toEqual('Login successfully')
	})

	it('Should be login failed, username or password wrong', async () => {
		await User.create(userData)

		const res = await request(app).post('/api/auth/login').send({ email: 'johndoe13@gmail.com', password: 'qwerty121' })
		expect(res.statusCode).toEqual(400)
		expect(res.body.message).toEqual('Username or password wrong')
	})

	it('Should be login failed, email not exist', async () => {
		await User.create(userData)

		const res = await request(app).post('/api/auth/login').send({ email: 'janedoe13@gmail.com', password: 'qwerty121' })
		expect(res.statusCode).toEqual(404)
		expect(res.body.message).toEqual('Email not never registered')
	})
})
