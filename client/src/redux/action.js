import axios from 'axios'

export const initialState = {
	message: ''
}

export const actionType = {
	REGISTER: 'REGISTER'
}

export const registerCreator = (action, payload) => {
	return async (dispatch) => {
		try {
			const res = await axios.post('/api/auth/register', payload)
			dispatch({ type: action, payload: { message: res.data.message } })
		} catch (error) {
			dispatch({ payload: { message: error.response } })
		}
	}
}
