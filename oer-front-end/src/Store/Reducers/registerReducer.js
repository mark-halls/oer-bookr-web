import { REGISTER_USER_START, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from "../Actions/registerActions"

const initialState = {
    isRegistering: false,
    isRegistered: true, 
    error: ""
}

export default (state = initialState, action) => {
  switch (action.type) {

  case REGISTER_USER_START:
    return { ...state, isRegistering: true, error: "" }

  case REGISTER_USER_SUCCESS: 
    return {...state, isRegistering: false, isRegistered:true}

	case REGISTER_USER_FAILURE:
		return {...state, isRegistering: false, error: action.payload}

  default:
    return state
  }
}
