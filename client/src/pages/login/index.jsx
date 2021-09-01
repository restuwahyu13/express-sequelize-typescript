import React from 'react'
import { connect } from 'react-redux'
import * as localStorage from 'local-storage'

import { loginCreator } from '../../redux/action'
import LoginView from './__view'

function Login(props) {
	const [disabled, setDisabled] = React.useState(false)
	const [message, setMessage] = React.useState(undefined)
	const [token, setToken] = React.useState(undefined)
	const [state, setState] = React.useState({ email: '', password: '' })

	const handleSubmit = (e) => {
		e.preventDefault()

		props.loginAction('LOGIN', state)

		if (props.registerState && props.registerState.payload.success) {
			setDisabled(true)
			setTimeout(() => setDisabled(undefined), 3000)
		} else {
			setDisabled(true)
			setTimeout(() => setDisabled(undefined), 3000)
		}
	}

	const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value })

	React.useEffect(() => {
		setMessage(props.loginState.payload.message)
		setToken(props.loginState.payload.accessToken)
	}, [props.loginState.payload.message, props.loginState.payload.accessToken])

	if ((message && token) !== undefined && message === 'Login successfully') {
		disabled === undefined && localStorage.set('accessToken', token)
		disabled === undefined && props.history.push('/home')
	} else {
		localStorage.set('accessToken', undefined)
	}

	return React.createElement(LoginView, {
		disabled,
		message,
		state,
		handleSubmit,
		handleChange
	})
}

const mapStateToProps = (state) => ({
	loginState: state.login
})

const mapDispatchToProps = (dispatch) => ({
	loginAction: (type, payload) => dispatch(loginCreator(type, payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
