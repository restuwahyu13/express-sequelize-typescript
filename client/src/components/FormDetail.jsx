import React from 'react'

function FormDetail(props) {
	return (
		<>
			<div className="container mt-5">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-12">
						<form autoComplete="off">
							<div className="d-flex flex-inline justify-content-center align-items-center">
								<div className="col-6">
									<div className="form-group mt-2">
										<label className="form-label">COMPANY NAME</label>
										<input
											type="text"
											name="companyName"
											className="form-control"
											onChange={props.handleChange}
											value={props.value.companyName}
											required
										/>
									</div>
									<div className="form-group mt-2">
										<label className="form-label">JOBS POSITION</label>
										<input
											type="text"
											name="jobsPosition"
											className="form-control"
											onChange={props.handleChange}
											value={props.value.jobsPosition}
											required
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="form-group mt-2">
										<label className="form-label mx-">START WORK</label>
										<input
											type="date"
											name="startWork"
											className="form-control mx-1"
											onChange={props.handleChange}
											value={props.value.startWork}
											required
										/>
									</div>
									<div className="form-group mt-2">
										<label className="form-label mx-">END WORK</label>
										<input
											type="date"
											name="endWork"
											className="form-control mx-1"
											onChange={props.handleChange}
											value={props.value.endWork}
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

export default FormDetail
