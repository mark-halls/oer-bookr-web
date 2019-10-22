import { REGISTER_USER_START, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from "../Actions/registerActions"

const initialState = {
  isRegistering: false,
  isRegistered: true,
  error: ""
}

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {

    case REGISTER_USER_START:
      {
        console.log(`register_user_start`)
        return { ...state, isRegistering: true, error: "" }
      }

    case REGISTER_USER_SUCCESS:
      {
        console.log(`register_user_success`)
        return { ...state, isRegistering: false, isRegistered: true }
      }

    case REGISTER_USER_FAILURE:
      {
        console.log(`register_user_failure`)
        return { ...state, isRegistering: false, error: action.payload }
      }

    default:
      return state
  }
}
