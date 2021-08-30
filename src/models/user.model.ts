import { Optional } from 'sequelize'
import * as sequelize from 'sequelize-typescript'

interface WorkExperince {
	companyName: string
	jobsPosition: string
	startWork: Date
	endWork: Date
	jobsDescription: string
}

interface PersonalInformation {
	firstName: string
	lastName: string
	birtDate: Date
	bornDate: string
	address: string
}

interface UserAttributes {
	id: number
	name: string
	email: string
	password: string
	personalInformation: PersonalInformation
	workExperinces: WorkExperince[]
	photo: string
	document: string
	createdAt?: Date
	updatedAt?: Date
}

@sequelize.Table
export class User extends sequelize.Model<UserAttributes, Optional<UserAttributes, 'id'>> {
	@sequelize.PrimaryKey
	@sequelize.AutoIncrement
	@sequelize.NotNull
	@sequelize.Column
	id!: number

	@sequelize.NotNull
	@sequelize.Column
	name!: string

	@sequelize.IsEmail
	@sequelize.NotNull
	@sequelize.Column
	email!: string

	@sequelize.NotNull
	@sequelize.Column
	password!: string

	@sequelize.NotNull
	@sequelize.Column
	get personalInformation(): PersonalInformation {
		return this.getDataValue('personalInformation')
	}

	set personalInformation(val: PersonalInformation) {
		this.setDataValue('personalInformation', val)
	}

	@sequelize.NotNull
	@sequelize.Column
	get workExperinces(): WorkExperince[] {
		return this.getDataValue('workExperinces')
	}

	set workExperinces(val: WorkExperince[]) {
		this.setDataValue('workExperinces', val)
	}

	@sequelize.NotNull
	@sequelize.Column
	photo!: string

	@sequelize.NotNull
	@sequelize.Column
	document!: string

	@sequelize.CreatedAt
	@sequelize.Column
	createdAt?: Date

	@sequelize.UpdatedAt
	@sequelize.Column
	updatedAt?: Date
}
