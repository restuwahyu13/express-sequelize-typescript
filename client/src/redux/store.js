import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import { registerReducer } from './reducer'
import { loginReducer } from './reducer'

export const history = createBrowserHistory()

export const store = createStore(
	combineReducers({ router: connectRouter(history), register: registerReducer, login: loginReducer }),
	applyMiddleware(reduxThunk, reduxLogger, routerMiddleware(history))
)
