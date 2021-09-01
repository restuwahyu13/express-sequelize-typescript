import React from 'react'
import { withRouter } from 'react-router-dom'

function Header(props) {
	const pathname = props.location.pathname
	return (
		<div>
			<nav className="navbar navbar-responsive" style={{ backgroundColor: '#cde7ff' }}>
				<div className="container-fluid">
					<h1 className="ml-3 mt-2 navbar-brand">
						<a className="text-decoration-none" href="/" style={{ fontSize: 22, color: 'rgb(93, 91, 91)', fontWeight: 600 }}>
							FullStack Development
						</a>
					</h1>
					<div className="d-flex flex-inline">
						<button
							className="btn mx-3"
							style={{ color: pathname === '/register' ? '#006bce' : 'rgb(93, 91, 91)', fontWeight: 600, fontSize: 15 }}
						>
							REGISTER
						</button>
						<button
							className="btn mx-3"
							style={{ color: pathname === '/login' ? '#006bce' : 'rgb(93, 91, 91)', fontWeight: 600, fontSize: 15 }}
						>
							LOGIN
						</button>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default withRouter(Header)
