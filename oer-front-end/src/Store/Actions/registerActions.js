import axios from 'axios'

export const REGISTER_USER_START = 'REGISTER_USER_START'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE'

const BASE_URL = "samirlilienfeld-oer-bookr.herokuapp.com/"

export const registerUser = registerInput => dispatch => {
  dispatch({ type: REGISTER_USER_START });
  axios
    .post(`${BASE_URL}/createnewuser`, registerInput)
    .then(res => {
      dispatch({ type: REGISTER_USER_SUCCESS })
      console.log(res)
    }).catch(err => console.log(err.response))
}