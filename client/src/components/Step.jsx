import React from 'react'

function Step(props) {
	return (
		<>
			<div className="container">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-12">
						<div className="d-flex justify-content-center align-items-center img-header">
							<img
								src="https://res.cloudinary.com/coding-street-art/image/upload/v1630429484/Logo_ifnixt.png"
								alt="Logo"
								className="img-responsive img-logo"
							/>
						</div>
						<div className="d-flex justify-content-center align-items-center img-header-circle">
							<div className="circle-root col-2">
								<div className="circle">
									<div className="circle-content" style={{ backgroundColor: props.step === 1 ? '#cde7ff' : '#ffff' }}>
										<span className="circle-text">1</span>
									</div>
									<div className="circle-line"></div>
								</div>
								<span className="mt-3">STEP: 1</span>
								<span className="mt-1">CREATE YOUR</span>
								<span className="mt-1">ACCOUNT</span>
								<span className="mt-1">PASSWORD</span>
							</div>
							<div className="circle-root col-2">
								<div className="circle">
									<div className="circle-content" style={{ backgroundColor: props.step === 2 ? '#cde7ff' : '#ffff' }}>
										<span className="circle-text">2</span>
									</div>
									<div className="circle-line"></div>
								</div>
								<span className="mt-3">STEP: 2</span>
								<span className="mt-1">PERSONAL</span>
								<span className="mt-1">INFORMATION</span>
								<span className="mt-1 opacity-0">PASSWORD</span>
							</div>
							<div className="circle-root col-2">
								<div className="circle">
									<div className="circle-content" style={{ backgroundColor: props.step === 3 ? '#cde7ff' : '#ffff' }}>
										<span className="circle-text">3</span>
									</div>
									<div className="circle-line"></div>
								</div>
								<span className="mt-3">STEP: 3</span>
								<span className="mt-1">EMPLOYMENT</span>
								<span className="mt-1">DETAILS</span>
								<span className="mt-1 opacity-0">PASSWORD</span>
							</div>
							<div className="circle-root col-2">
								<div className="circle">
									<div className="circle-content" style={{ backgroundColor: props.step === 4 ? '#cde7ff' : '#ffff' }}>
										<span className="circle-text">4</span>
									</div>
									<div className="circle-line"></div>
								</div>
								<span className="mt-3">STEP: 5</span>
								<span className="mt-1">UPLOAD</span>
								<span className="mt-1">DOCUMENTS</span>
								<span className="mt-1 opacity-0">PASSWORD</span>
							</div>
							<div className="circle-root col-2">
								<div className="circle">
									<div className="circle-content" style={{ backgroundColor: props.step === 5 ? '#cde7ff' : '#ffff' }}>
										<span className="circle-text">5</span>
									</div>
								</div>
								<span className="mt-3">STEP: 5</span>
								<span className="mt-1">COMPLETE</span>
								<span className="mt-1 opacity-0">PASSWORD</span>
								<span className="mt-1 opacity-0">PASSWORD</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Step
