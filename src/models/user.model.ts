import { DataTypes, Optional } from 'sequelize'
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
	personalInformation: string
	workExperinces: string
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
	@sequelize.Column(DataTypes.STRING)
	get personalInformation(): PersonalInformation {
		return JSON.parse(this.getDataValue('personalInformation'))
	}

	set personalInformation(val: any) {
		this.setDataValue('personalInformation', JSON.stringify(val))
	}

	@sequelize.NotNull
	@sequelize.Column(DataTypes.STRING)
	get workExperinces(): WorkExperince[] {
		return JSON.parse(this.getDataValue('workExperinces'))
	}

	set workExperinces(val: any) {
		this.setDataValue('workExperinces', JSON.stringify(val))
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
