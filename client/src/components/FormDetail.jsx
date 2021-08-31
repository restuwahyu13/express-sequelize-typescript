import React from 'react'

function FormDetail() {
	return (
		<>
			<div className="container mt-5">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-12">
						<form>
							<div className="d-flex flex-inline justify-content-center align-items-center">
								<div className="col-6">
									<div className="form-group mt-2">
										<label className="form-label">Company Name</label>
										<input type="text" className="form-control" />
									</div>
									<div className="form-group mt-2">
										<label className="form-label">Jobs Position</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="col-6">
									<div className="form-group mt-2">
										<label className="form-label mx-">Start Date</label>
										<input type="date" className="form-control mx-1" />
									</div>
									<div className="form-group mt-2">
										<label className="form-label mx-">End Date</label>
										<input type="date" className="form-control mx-1" />
									</div>
								</div>
							</div>
							<div className="d-flex justify-content-between align-items-between">
								<div className="form-group mt-5">
									<button type="submit" className="btn btn-primary form-control">
										Previous Step
									</button>
								</div>
								<div className="form-group mt-5">
									<button type="submit" className="btn btn-primary form-control">
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
