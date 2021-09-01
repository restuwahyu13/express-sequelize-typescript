import { initialState, actionType } from './action'

export const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.REGISTER:
			return { ...state, payload: action.payload }
		default:
			return { ...state, payload: action.payload }
	}
}
