import axios from 'axios'

export const LOGIN_USER_START = 'LOGIN_USER_START'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'

const BASE_URL = "samirlilienfeld-oer-bookr.herokuapp.com/"

export const loginUser = loginInput => dispatch => {
	dispatch({type:LOGIN_USER_START});
	axios
		.post(`${BASE_URL}/login`, loginInput)
		.then(res => {
			dispatch({type: LOGIN_USER_SUCCESS})
			localStorage.setItem("token", res.data.access_token)
		})
		.catch(err => {
			dispatch({type: LOGIN_USER_FAILURE, payload: err})
		})
}