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
	let accessToken: string
	let grandToken: string

	beforeAll(async () => {
		readDocument = path.resolve(__dirname, 'document/document.pdf')
		readPhoto = path.resolve(__dirname, 'document/photo.jpg')

		userData = {
			name: faker.internet.userName(),
			email: 'johndoe13@gmail.com',
			password: 'bukopin12',
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
					jobsDescription:
						'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
				}
			]),
			photo: faker.image.people(),
			document: faker.image.people()
		}

		const sequelize = databaseConnection(User)
		await sequelize.sync({ force: true })
	})

	beforeEach(() => {
		jest.useFakeTimers()
		jest.setTimeout(100000)
	})

	afterEach(() => {
		jest.clearAllTimers()
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

		const res = await request(app).post('/api/auth/login').send({ email: 'johndoe13@gmail.com', password: 'bukopin12' })
		expect(res.statusCode).toEqual(200)
		expect(res.body.message).toEqual('Login successfully')
	})

	it('Should be login failed, username or password wrong', async () => {
		const res = await request(app).post('/api/auth/login').send({ email: 'johndoe13@gmail.com', password: 'qwerty121' })
		expect(res.statusCode).toEqual(400)
		expect(res.body.message).toEqual('Username or password wrong')
	})

	it('Should be login failed, email not exist', async () => {
		const res = await request(app).post('/api/auth/login').send({ email: 'janedoe131@gmail.com', password: 'bukopin12' })
		expect(res.statusCode).toEqual(404)
		expect(res.body.message).toEqual('Email not never registered')
	})

	it('Should be create user success', async () => {
		userData.email = 'janedoe13@gmail.com'

		const res = await request(app)
			.post('/api/user/create')
			.field('name', userData.name)
			.field('email', userData.email)
			.field('password', userData.password)
			.field('role', 'admin')
			.attach('photo', readPhoto)
			.set('Content-Type', 'multipart/form-data')

		expect(res.statusCode).toEqual(201)
		expect(res.body.message).toEqual('Create user data successfully')
	})

	it('Should be create user failed', async () => {
		userData.email = 'janedoe13@gmail.com'

		const res = await request(app)
			.post('/api/user/create')
			.field('name', userData.name)
			.field('email', userData.email)
			.field('password', userData.password)
			.field('role', 'admin')
			.attach('photo', readPhoto)
			.set('Content-Type', 'multipart/form-data')

		expect(res.statusCode).toEqual(409)
		expect(res.body.message).toEqual('Email already taken')
	})

	it('Should be login success by admin', async () => {
		const res = await request(app).post('/api/auth/login').send({ email: 'janedoe13@gmail.com', password: 'bukopin12' })

		expect(res.statusCode).toEqual(200)
		expect(res.body.message).toEqual('Login successfully')

		accessToken = res.body.accessToken
		grandToken = res.body.grantToken
	})

	it('Should be result user success', async () => {
		const res = await request(app)
			.get('/api/user/results')
			.set({ Authorization: `Bearer ${accessToken}`, grand: grandToken })

		expect(res.statusCode).toEqual(200)
		expect(res.body.message).toEqual('Success')
	})

	it('Should be result user by id success', async () => {
		const res = await request(app)
			.get(`/api/user/result/${1}`)
			.set({ Authorization: `Bearer ${accessToken}`, grand: grandToken })

		expect(res.statusCode).toEqual(200)
		expect(res.body.message).toEqual('Success')
	})

	it('Should be result user by id failed', async () => {
		const res = await request(app)
			.get(`/api/user/result/${100}`)
			.set({ Authorization: `Bearer ${accessToken}`, grand: grandToken })

		expect(res.statusCode).toEqual(404)
		expect(res.body.message).toEqual(`User data not found for this id ${100}`)
	})

	it('Should be update user success', async () => {
		userData.email = 'restuwahyu13@gmail.com'

		const res = await request(app)
			.put(`/api/user/update/${1}`)
			.field('name', userData.name)
			.field('email', userData.email)
			.field('password', userData.password)
			.field('role', 'admin')
			.attach('photo', readPhoto)
			.set('Content-Type', 'multipart/form-data')
			.set({ 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${accessToken}`, grand: grandToken })

		expect(res.statusCode).toEqual(200)
		expect(res.body.message).toEqual('Update user data successfully')
	})

	it('Should be update user failed', async () => {
		userData.email = 'raysa@gmail.com'

		const res = await request(app)
			.put(`/api/user/update/${100}`)
			.field('name', userData.name)
			.field('email', userData.email)
			.field('password', userData.password)
			.field('role', 'admin')
			.attach('photo', readPhoto)
			.set({ 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${accessToken}`, grand: grandToken })

		expect(res.statusCode).toEqual(404)
		expect(res.body.message).toEqual(`User data not found for this id ${100}`)
	})

	it('Should be delete user by id success', async () => {
		const res = await request(app)
			.delete(`/api/user/delete/${1}`)
			.set({ Authorization: `Bearer ${accessToken}`, grand: grandToken })

		expect(res.statusCode).toEqual(200)
		expect(res.body.message).toEqual('Delete user data successfully')
	})

	it('Should be delete user by id failed', async () => {
		const res = await request(app)
			.delete(`/api/user/delete/${100}`)
			.set({ Authorization: `Bearer ${accessToken}`, grand: grandToken })

		expect(res.statusCode).toEqual(404)
		expect(res.body.message).toEqual(`User data not found for this id ${100}`)
	})
})
