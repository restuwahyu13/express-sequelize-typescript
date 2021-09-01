import 'bootstrap/dist/css/bootstrap.min.css'
import './global.css'

import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { store } from './redux/store'
import App from './App'

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
