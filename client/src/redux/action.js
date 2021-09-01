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
			const res = await axios.post('/api/auth/register', payload, {
				headers: {
					'Access-Control-Origin': '*',
					'Access-Control-Allow-Methods': '*',
					'Access-Control-Allow-Headers': '*',
					'Content-Type': 'multipart/form-data'
				}
			})

			dispatch({ type: action, payload: { message: res.data.message, succes: true } })
		} catch (error) {
			dispatch({ type: action, payload: { message: error.response.data.message, succes: false } })
		}
	}
}
