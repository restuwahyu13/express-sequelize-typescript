import React from 'react'

import Authenication from '../../components/Auth'

function Home() {
	return (
		<>
			<Authenication>
				<div className="container mt-5">
					<div className="row d-flex justify-content-center align-items-center">
						<div className="jumbotron bg-dark p-5" style={{ borderRadius: 10, boxSizing: 'border-box' }}>
							<h1 className="text-light">What is Lorem Ipsum ?</h1>
							<p className="text-light mt-3">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
								standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
								type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
								remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
								Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
								of Lorem Ipsum.
							</p>
						</div>
					</div>
				</div>
			</Authenication>
		</>
	)
}

export default Home
