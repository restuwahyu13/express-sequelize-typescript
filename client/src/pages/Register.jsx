import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { registerCreator } from '../redux/action'

import Step from '../components/Step'
import Form from '../components/Form'
import FormInformation from '../components/FormInformation'
import FormDetail from '../components/FormDetail'
import FormUpload from '../components/FormUpload'
import Complete from '../components/Compelete'
import Alert from '../components/Alert'
import Header from '../components/Header'

function Register(props) {
	const [state, setState] = React.useState({
		name: '',
		email: '',
		password: '',
		cpassword: '',
		firstName: '',
		lastName: '',
		birtDate: '',
		bornDate: '',
		companyName: '',
		jobsPosition: '',
		startWork: '',
		endWork: ''
	})

	const [file, setFile] = React.useState({
		photo: '',
		document: ''
	})

	const [disabled, setDisabled] = React.useState(false)

	const [step, setStep] = React.useState(1)

	const [message, setMessage] = React.useState(undefined)

	const previousStep = (e) => {
		e.preventDefault()
		setStep(() => step - 1)
	}

	const nextStep = (e) => {
		e.preventDefault()
		setStep(() => step + 1)
	}

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const handleChangePhoto = (e) => {
		e.preventDefault()
		setFile({ ...file, photo: e.target.files[0] })
	}

	const handleChangeDocument = (e) => {
		e.preventDefault()
		setFile({ ...file, document: e.target.files[0] })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const formData = new FormData()
		formData.append('name', state.name)
		formData.append('email', state.email)
		formData.append('password', state.password)
		formData.append('personalInformation[firstName]', state.firstName)
		formData.append('personalInformation[lastName]', state.lastName)
		formData.append('personalInformation[birtDate]', state.birtDate)
		formData.append('personalInformation[bornDate]', state.bornDate)
		formData.append('workExperinces[0][companyName]', state.companyName)
		formData.append('workExperinces[0][jobsPosition]', state.birtDate)
		formData.append('workExperinces[0][startWork]', state.startWork)
		formData.append('workExperinces[0][endWork]', state.endWork)
		formData.append('workExperinces[0][bornDate]', state.bornDate)
		formData.append('photo', file.photo)
		formData.append('document', file.document)

		props.registerAction('REGISTER', formData)

		if (props.registerState && props.registerState.payload.success) {
			setDisabled(true)
			setTimeout(() => setDisabled(undefined), 3000)
		} else {
			setDisabled(true)
			setTimeout(() => setDisabled(undefined), 3000)
		}
	}

	React.useEffect(() => {
		setMessage(props.registerState.payload.message)
	}, [props.registerState.payload.message])

	const RenderContennt = () => {
		switch (step) {
			case 1:
				return (
					<Form
						previousStep={previousStep}
						nextStep={nextStep}
						handleChange={handleChange}
						handleChangeFile={handleChangePhoto}
						value={state}
						step={step}
					/>
				)
			case 2:
				return <FormInformation previousStep={previousStep} nextStep={nextStep} handleChange={handleChange} value={state} />
			case 3:
				return <FormDetail previousStep={previousStep} nextStep={nextStep} handleChange={handleChange} value={state} />
			case 4:
				return (
					<FormUpload
						previousStep={previousStep}
						nextStep={nextStep}
						handleChange={handleChange}
						handleChangeFile={handleChangeDocument}
						value={state}
					/>
				)
			case 5:
				return <Complete previousStep={previousStep} nextStep={nextStep} handleSubmit={handleSubmit} disabled={disabled} />
			default:
		}
	}

	return (
		<>
			<Header />
			<Alert
				disabled={disabled}
				message={message}
				validate="Create new user account successfully"
				redirect={<Redirect to="/home" />}
			/>
			<Step step={step} />
			{RenderContennt()}
		</>
	)
}

const mapStateToProps = (state) => ({
	registerState: state.register
})

const mapDispatchToProps = (dispatch) => ({
	registerAction: (action, payload) => dispatch(registerCreator(action, payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
