import React from 'react'

function FormInformation(props) {
	return (
		<>
			<div className="container mt-5">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-12">
						<form autoComplete="off">
							<div className="d-flex flex-inline justify-content-center align-items-center">
								<div className="col-6">
									<div className="form-group mt-2">
										<label className="form-label">FIRSTNAME</label>
										<input
											type="text"
											name="firstName"
											className="form-control"
											onChange={props.handleChange}
											value={props.value.firstName}
											required
										/>
									</div>
									<div className="form-group mt-2">
										<label className="form-label">LASTNAME</label>
										<input
											type="text"
											name="lastName"
											className="form-control"
											onChange={props.handleChange}
											value={props.value.lastName}
											required
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="form-group mt-2">
										<label className="form-label mx-">BORNDATE</label>
										<input
											type="text"
											name="bornDate"
											className="form-control mx-1"
											onChange={props.handleChange}
											value={props.value.bornDate}
											required
										/>
									</div>
									<div className="form-group mt-2">
										<label className="form-label mx-">BIRTDATE</label>
										<input
											type="date"
											name="birtDate"
											className="form-control mx-1"
											onChange={props.handleChange}
											value={props.value.birtDate}
											required
										/>
									</div>
								</div>
							</div>
							<div className="d-flex justify-content-between align-items-between">
								<div className="form-group mt-5">
									<button type="submit" className="col-12" onClick={props.previousStep}>
										Previous Step
									</button>
								</div>
								<div className="form-group mt-5">
									<button type="submit" className="col-12" onClick={props.nextStep}>
										Next Step
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default FormInformation
