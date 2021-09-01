import React from 'react'
import { Redirect } from 'react-router-dom'

import Step from '../../components/Step'
import Alert from '../../components/Alert'
import Header from '../../components/Header'

function __view(props) {
	const { disabled, message, step, RenderContennt } = props

	return (
		<>
			<Header />
			<Alert
				disabled={disabled}
				message={message}
				validate="Create new user account successfully"
				redirect={<Redirect to="/login" />}
			/>
			<Step step={step} />
			{RenderContennt()}
		</>
	)
}

export default __view
