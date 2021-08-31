import path from 'path'
import faker from 'faker'
import request from 'supertest'
import app from '../app'
import { databaseConnection } from '../configs/connection.config'
import { User } from '../models/user.model'

describe('API Test Driven Development', function () {
	let readDocument: any
	let readPhoto: any
	let userData: any

	beforeAll(async () => {
		readDocument = path.resolve(__dirname, 'document/document.pdf')
		readPhoto = path.resolve(__dirname, 'document/photo.jpg')

		userData = {
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

		const sequelize = databaseConnection(User)
		await sequelize.sync({ force: true })
	})

	it('Should be register success', async () => {
		const personalInformation = JSON.parse(userData.personalInformation)
		const workExperinces = JSON.parse(userData.workExperinces)[0]

		const res = await request(app)
			.post('/api/auth/register')
			.field('name', userData.name)
			.field('email', userData.email)
			.field('password', userData.password)
			.field('personalInformation[firstName]', personalInformation.firstName)
			.field('personalInformation[lastName]', personalInformation.lastName)
			.field('personalInformation[birtDate]', personalInformation.birtDate)
			.field('personalInformation[bornDate]', personalInformation.bornDate)
			.field('personalInformation[address]', personalInformation.address)
			.field('workExperinces[0][companyName]', workExperinces.companyName)
			.field('workExperinces[0][jobsPosition]', workExperinces.jobsPosition)
			.field('workExperinces[0][startWork]', workExperinces.startWork)
			.field('workExperinces[0][endWork]', workExperinces.endWork)
			.field('workExperinces[0][jobsDescription]', workExperinces.jobsDescription)
			.attach('photo', readPhoto)
			.attach('document', readDocument)
			.set('Content-Type', 'multipart/form-data')

		expect(res.statusCode).toEqual(201)
		expect(res.body.message).toEqual('Create new user account successfully')
	})

	it('Should be register failed, email already taken', async () => {
		await User.create(userData)

		const personalInformation = JSON.parse(userData.personalInformation)
		const workExperinces = JSON.parse(userData.workExperinces)[0]

		const res = await request(app)
			.post('/api/auth/register')
			.field('name', userData.name)
			.field('email', userData.email)
			.field('password', userData.password)
			.field('personalInformation[firstName]', personalInformation.firstName)
			.field('personalInformation[lastName]', personalInformation.lastName)
			.field('personalInformation[birtDate]', personalInformation.birtDate)
			.field('personalInformation[bornDate]', personalInformation.bornDate)
			.field('personalInformation[address]', personalInformation.address)
			.field('workExperinces[0][companyName]', workExperinces.companyName)
			.field('workExperinces[0][jobsPosition]', workExperinces.jobsPosition)
			.field('workExperinces[0][startWork]', workExperinces.startWork)
			.field('workExperinces[0][endWork]', workExperinces.endWork)
			.field('workExperinces[0][jobsDescription]', workExperinces.jobsDescription)
			.attach('photo', readPhoto)
			.attach('document', readDocument)
			.set('Content-Type', 'multipart/form-data')

		expect(res.statusCode).toEqual(409)
		expect(res.body.message).toEqual('Email already taken')
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
