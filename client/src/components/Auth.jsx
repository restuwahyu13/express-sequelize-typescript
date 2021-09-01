import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import * as localStorage from 'local-storage'
import { assert } from 'is-any-type'

export class Auth extends Component {
	render() {
		return (
			<>
				{localStorage.get('accessToken') === 'undefined' || assert.isNull(localStorage.get('accessToken')) ? (
					<Redirect to="/login" />
				) : (
					this.props.children
				)}
			</>
		)
	}
}

export default Auth
