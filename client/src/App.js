import { Fragment, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './redux/store'

import RootPage from './pages'

// const FethcData = () => {
// 	useEffect(() => {
// 		axios.get('/api').then((res) => console.log(res.data))
// 	}, [])

// 	return (
// 		<>
// 			<h1>Hello Wordl</h1>
// 		</>
// 	)
// }

const App = () => (
	<ConnectedRouter history={history}>
		<Router>
			<Fragment>
				<Switch>
					<Route exact path="/" component={RootPage} />
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
