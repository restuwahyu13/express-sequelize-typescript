import React from 'react'

function FormUpload(props) {
	return (
		<>
			<div className="container mt-5">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-12">
						<form autoComplete="off">
							<div className="d-flex flex-inline justify-content-center align-items-center">
								<div className="col-6">
									<div className="d-flex justify-content-center align-items-center">
										<img
											src="https://res.cloudinary.com/coding-street-art/image/upload/v1630429484/Avatar_j0mpoq.png"
											alt="Logo"
											className="img-responsive img-logo"
										/>
									</div>
									<div className="d-flex justify-content-center align-items-center">
										<input type="file" className="mt-4" name="document" onChange={props.handleChangeFile} required />
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

export default FormUpload
