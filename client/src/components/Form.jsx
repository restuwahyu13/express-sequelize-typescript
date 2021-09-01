import React from 'react'

function Form(props) {
	// const [validate, setValidate] = React.useState(false)
	// const getValue = [props.value.name, props.value.email, props.value.password, props.value.cpassword]
	// let check = getValue.includes('')

	// const handleClick = () => {
	// 	if (check) {
	// 		alert('field is required')
	// 	} else {
	// 		setValidate(true)
	// 	}
	// }

	return (
		<>
			<div className="container">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-12">
						<div className="d-flex flex-column justify-content-center align-items-center img-header-circle">
							<h4 className="line-title">CREATE YOUR ACCOUNT</h4>
							<p className="mt-3 line-text">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, magnam distinctio? Laudantium eos, corporis
								reprehenderit at omnis distinctio vero repellat labore ipsum doloremque adipisci, aperiam incidunt, esse illum
								saepe numquam?
							</p>
						</div>
						<form autoComplete="off">
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
											<input type="file" className="mt-4" name="photo" onChange={props.handleChangeFile} required />
										</div>
									</div>
								</div>
								<div className="d-flex flex-column">
									<div className="col-7 d-flex flex-inline">
										<div className="form-group col-12">
											<label className="form-label">NAME</label>
											<input
												type="text"
												name="name"
												className="form-control"
												onChange={props.handleChange}
												value={props.value.name}
												required
											/>
										</div>
										<div className="form-group col-12">
											<label className="form-label mx-3">EMAIL</label>
											<input
												type="text"
												name="email"
												className="form-control mx-3"
												onChange={props.handleChange}
												value={props.value.email}
												required
											/>
										</div>
									</div>
									<div className="col-7 d-flex flex-inline mt-4">
										<div className="form-group col-12">
											<label className="form-label">PASSWORD</label>
											<input
												type="password"
												name="password"
												className="form-control"
												onChange={props.handleChange}
												value={props.value.password}
												required
											/>
										</div>
										<div className="form-group col-12">
											<label className="form-label mx-3">CONFIRM PASSWORD</label>
											<input
												type="password"
												name="cpassword"
												className="form-control mx-3"
												onChange={props.handleChange}
												value={props.value.cpassword}
												required
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="d-flex justify-content-end align-items-end mt-5">
								<button type="button" className="col-2" onClick={props.nextStep}>
									Next Step
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Form
