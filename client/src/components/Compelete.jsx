import React from 'react'

function Complete() {
	const [checked, setChecked] = React.useState(false)

	const onChange = () => setChecked(!checked)

	return (
		<>
			<div className="container mt-5">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-12">
						<form>
							<div className="d-flex flex-inline justify-content-center align-items-center">
								<div className="col-9">
									<div style={{ position: 'relative', left: checked ? 0 : '-4rem' }}>
										<label className="mx-3">
											<strong>Are you sure submit this data ?</strong>
										</label>
										<input type="checkbox" className="mt-1" name="complete" onChange={onChange} />
									</div>
								</div>
								<div className="col-3" style={{ display: checked ? 'block' : 'none' }}>
									<div className="form-group">
										<button type="submit" className="btn btn-primary form-control">
											Send Data
										</button>
									</div>
								</div>
							</div>
							<div className="d-flex justify-content-between align-items-between">
								<div className="form-group mt-5" style={{ display: checked ? 'none' : 'block' }}>
									<button type="submit" className="btn btn-primary form-control">
										Previous Step
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

export default Complete
