import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAULURE } from "../Actions/LoginActions"

const initialState = {
    isLoggingIn: false,
    isAuthenticated: false,
    error: ""
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {

  case LOGIN_USER_START:
      return { ...state, isLoggingIn:true,error: "" }
      
  case LOGIN_USER_SUCCESS:
      return{...state, isLogging: false, isAuthenticated: true}

  case LOGIN_USER_FAULURE: 
      return {...state, isLoggingIn: false, error: action.payload}

  default:
    return state
  }
}
