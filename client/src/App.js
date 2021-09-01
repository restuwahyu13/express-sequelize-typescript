import { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './redux/store'

import Register from './pages/Register'
import Home from './pages/Home'

const App = () => (
	<ConnectedRouter history={history}>
		<Router>
			<Fragment>
				<Switch>
					<Route exact path="/" component={Register} />
					<Route path="/home" component={Home} />
					<Route
						path="*"
						render={() => (
							<>
								<h1 className="text-center text-danger"> ROUTE NOT MATCH - 404 </h1>
							</>
						)}
					/>
				</Switch>
			</Fragment>
		</Router>
	</ConnectedRouter>
)

export default App
