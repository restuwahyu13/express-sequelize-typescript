import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export class Auth extends Component {
	render() {
		return (
			<div>
				{window.localStorage.getItem('accesToken') !== ('' || undefined || null) && this.children}
				{window.localStorage.getItem('accesToken') === ('' || undefined || null) && <Redirect to="/login" />}
			</div>
		)
	}
}

export default Auth
