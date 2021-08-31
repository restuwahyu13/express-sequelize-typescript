import React from 'react'

function FormUpload() {
	return (
		<>
			<div className="container mt-5">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-12">
						<form>
							<div className="d-flex flex-inline justify-content-center align-items-center">
								<div className="col-6">
									<div class="d-flex justify-content-center align-items-center">
										<img
											src="https://res.cloudinary.com/coding-street-art/image/upload/v1630429484/Avatar_j0mpoq.png"
											alt="Logo"
											className="img-responsive img-logo"
										/>
									</div>
									<div class="d-flex justify-content-center align-items-center">
										<input type="file" className="mt-4" />
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

export default FormUpload
