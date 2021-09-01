import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Redirect } from 'react-router-dom'
import { history } from './redux/store'

import Register from './pages/register'
import Login from './pages/login'
import Home from './pages/home'

const App = () => (
	<ConnectedRouter history={history}>
		<Router>
			<Fragment>
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<>
								<Redirect to="/register" />
							</>
						)}
					/>
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
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
