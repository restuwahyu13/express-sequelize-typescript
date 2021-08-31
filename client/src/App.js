import React from 'react'
import Step from './components/Step'
import Form from './components/Form'
import FormInformation from './components/FormInformation'
import FormDetail from './components/FormDetail'
import FormUpload from './components/FormUpload'
import Complete from './components/Compelete'

function App() {
	const [state, setState] = React.useState({
		name: '',
		email: '',
		password: '',
		personalInformation: {
			firstName: '',
			lastName: '',
			birtDate: '',
			bornDate: '',
			address: ''
		},
		workExperinces: {
			companyName: '',
			jobsPosition: '',
			startWork: '',
			endWork: ''
		},
		photo: '',
		document: ''
	})

	const [step, setStep] = React.useState(1)

	const previousStep = (e) => {
		e.preventDefault()
		setStep(step - 1)
	}
	const nextStep = (e) => {
		e.preventDefault()
		setState(step + 1)
	}

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const RenderContennt = () => {
		switch (step) {
			case 1:
				return <Form previousStep={previousStep} nextStep={nextStep} handleChange={handleChange} value={state} />
			case 2:
				return <FormInformation previousStep={previousStep} nextStep={nextStep} handleChange={handleChange} value={state} />
			case 3:
				return <FormDetail previousStep={previousStep} nextStep={nextStep} handleChange={handleChange} value={state} />
			case 4:
				return <FormUpload previousStep={previousStep} nextStep={nextStep} handleChange={handleChange} value={state} />
			case 5:
				return <Complete previousStep={previousStep} nextStep={nextStep} handleChange={handleChange} value={state} />
			default:
		}
	}

	return (
		<>
			<Step step={step} />
			{/* {RenderContennt()} */}
			<Complete />
		</>
	)
}

export default App
