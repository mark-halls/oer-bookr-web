import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "../Actions/LoginActions"

const initialState = {
  isLoggingIn: false,
  isAuthenticated: false,
  error: ""
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_USER_START:
      {
        console.log(`login_user_start`)
        return { ...state, isLoggingIn: true, error: "" }
      }

    case LOGIN_USER_SUCCESS:
      {
        console.log(`login_user_success`)
        return { ...state, isLogging: false, isAuthenticated: true }
      }
    case LOGIN_USER_FAILURE:
      {
        console.log(`login_user_failure`)
        return { ...state, isLoggingIn: false, error: action.payload }
      }

    default:
      return state
  }
}
