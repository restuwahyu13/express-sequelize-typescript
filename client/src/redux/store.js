import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { registerReducer } from './reducer'

export const history = createBrowserHistory()

export const store = createStore(
	combineReducers({ register: registerReducer, router: connectRouter(history) }),
	applyMiddleware(reduxThunk, reduxLogger, routerMiddleware(history))
)
