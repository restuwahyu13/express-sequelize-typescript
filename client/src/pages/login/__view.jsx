import React from 'react'
import { Redirect } from 'react-router-dom'

import Header from '../../components/Header'
import Alert from '../../components/Alert'

function __view(props) {
	const { disabled, message, handleSubmit, handleChange, state } = props

	return (
		<>
			<Header />
			<div className="container mt-5">
				<div className="row d-flex flex-row justify-content-center align-items-center">
					<div className="col-lg-6 col-md-12 col-sm-12">
						<div className="card">
							<div className="card-header bg-white">
								<h3 className="text-dark font-weight-bold text-left">Login</h3>
							</div>
							<div className="card bod p-3">
								<form onSubmit={handleSubmit} autoComplete="off">
									<div className="form-group">
										<label htmlFor="email" className="py-2 text-dark font-weight-bold">
											Email
										</label>
										<input
											type="email"
											name="email"
											className="form-control"
											placeholder="Enter Email"
											onChange={handleChange}
											value={state.email}
											required
										/>
									</div>
									<div className="form-group">
										<label htmlFor="password" className="py-2 text-dark font-weight-bold">
											Password
										</label>
										<input
											type="password"
											name="password"
											className="form-control"
											placeholder="Enter Password"
											onChange={handleChange}
											value={state.password}
											required
										/>
									</div>
									<div className="form-group">
										<button
											type="submit"
											className="btn col-12 mt-3 text-dark font-weight-bold"
											disabled={props.disabled}
											style={{ opacity: props.disabled ? '0.3' : 1 }}
										>
											Login
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Alert disabled={disabled} message={message} validate="Login successfully" redirect={<Redirect to="/home" />} />
		</>
	)
}

export default __view
