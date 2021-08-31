import { DataTypes, Optional } from 'sequelize'
import * as sequelize from 'sequelize-typescript'
import { hashPassword } from '../helpers/bcrypt.helper'

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
	role?: string
	createdAt?: Date
	updatedAt?: Date
}

@sequelize.Table
export class User extends sequelize.Model<UserAttributes, Optional<UserAttributes, 'id'>> {
	@sequelize.PrimaryKey
	@sequelize.AutoIncrement
	@sequelize.AllowNull(false)
	@sequelize.Column
	id!: number

	@sequelize.AllowNull(false)
	@sequelize.Column
	name!: string

	@sequelize.IsEmail
	@sequelize.AllowNull(false)
	@sequelize.Column
	email!: string

	@sequelize.AllowNull(false)
	@sequelize.Column
	password!: string

	@sequelize.AllowNull(false)
	@sequelize.Column(DataTypes.STRING)
	get personalInformation(): PersonalInformation {
		return JSON.parse(this.getDataValue('personalInformation'))
	}

	set personalInformation(val: any) {
		this.setDataValue('personalInformation', JSON.stringify(val))
	}

	@sequelize.AllowNull(false)
	@sequelize.Column(DataTypes.STRING)
	get workExperinces(): WorkExperince[] {
		return JSON.parse(this.getDataValue('workExperinces'))
	}

	set workExperinces(val: any) {
		this.setDataValue('workExperinces', JSON.stringify(val))
	}

	@sequelize.AllowNull(false)
	@sequelize.Column
	photo!: string

	@sequelize.AllowNull(false)
	@sequelize.Column
	document!: string

	@sequelize.AllowNull
	@sequelize.Column
	role!: string

	@sequelize.AllowNull
	@sequelize.CreatedAt
	@sequelize.Column
	createdAt?: Date

	@sequelize.AllowNull
	@sequelize.UpdatedAt
	@sequelize.Column
	updatedAt?: Date

	@sequelize.BeforeCreate
	static hashPasswordCreate(instance: User, options?: any): void {
		instance.password = hashPassword(instance.password)
	}

	@sequelize.BeforeUpdate
	static hashPasswordUpdate(instance: User, options?: any): void {
		instance.password = hashPassword(instance.password)
	}
}
