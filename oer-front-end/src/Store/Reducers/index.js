import { combineReducers } from 'redux'
import { loginReducer } from './loginReducer'
import { registerReducer } from './registerReducer'
import { booksReducer } from './booksReducer'
import { reviewsReducer } from './reviewsReducer'

export default combineReducers({
  loginReducer,
  registerReducer,
  booksReducer,
  reviewsReducer
})