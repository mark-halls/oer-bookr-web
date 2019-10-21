
import {
  GET_BOOKS_START,
  GET_BOOKS_FAILURE,
  GET_BOOKS_SUCCESS,
  ADD_BOOK_START,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  UPDATE_BOOK_START,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILURE,
  DELETE_BOOK_START,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAILURE
} from '../Actions/booksActions'

const initialState = {
  books: [],
  isLoadingBooks: false,
  isAddingBook: false,
  isDeletingBook: false,
  isEditingBook: false,
  isUpdatingBook: false,
  error: ""

}

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_BOOKS_START:
      return { ...state, isLoadingBooks: true, error: "" }
    case GET_BOOKS_SUCCESS:
      return { ...state, isLoadingBooks: false, books: action.payload }
    case GET_BOOKS_FAILURE:
      return { ...state, isLoadingBooks: false, error: action.payload }
    case ADD_BOOK_START:
      return { ...state, isAddingBook: true, error: "" }
    case ADD_BOOK_SUCCESS:
      return { ...state, isAddingBook: false }
    case ADD_BOOK_FAILURE:
      return { ...state, isAddingBook: false, error: action.payload }
    case UPDATE_BOOK_START:
      return { ...state, isUpdatingBook: true, error: "" }
    case UPDATE_BOOK_SUCCESS:
      return { ...state, isupdatingBook: false }
    case UPDATE_BOOK_FAILURE:
      return { ...state, isupdatingBook: false }
    case DELETE_BOOK_START:
      return { ...state, isDeletingBook: true, error: "" }
    case DELETE_BOOK_SUCCESS:
      return { ...state, isDeletingBook: false }
    case DELETE_BOOK_FAILURE:
      return { ...state, isDeletingBook: false, error: action.payload }
    default:
      return state
  }
}
