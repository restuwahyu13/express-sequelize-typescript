import React from 'react'

function Form() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="d-flex flex-column justify-content-center align-items-center img-header-circle">
							<h4 className="line-title">CREATE YOUR ACCOUNT</h4>
							<p className="mt-3">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, magnam distinctio? Laudantium eos, corporis
								reprehenderit at omnis distinctio vero repellat labore ipsum doloremque adipisci, aperiam incidunt, esse illum
								saepe numquam?
							</p>
						</div>
						<div className="d-flex flex-inline px-5 mt-3">
							<div className="col-6">
								<div className="form-group col-6">
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
							<div className="d-flex flex-column">
								<div className="col-7 d-flex flex-inline">
									<div className="form-group col-12">
										<label className="form-label">Email address</label>
										<input type="email" className="form-control" />
									</div>
									<div className="form-group col-12">
										<label className="form-label mx-3">Email address</label>
										<input type="email" className="form-control mx-3" />
									</div>
								</div>

								<div className="col-7 d-flex flex-inline">
									<div className="form-group col-12">
										<label className="form-label">Email address</label>
										<input type="email" className="form-control" />
									</div>
									<div className="form-group col-12">
										<label className="form-label mx-3">Email address</label>
										<input type="email" className="form-control mx-3" />
									</div>
								</div>
							</div>
						</div>
						<div className="d-flex justify-content-end align-items-end mt-5">
							<button type="button" class="btn btn-primary col-2">
								Save & Next
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Form
