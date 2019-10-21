import Axios from "axios"

export const GET_BOOKS_START = 'GET_BOOKS_START'
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS'
export const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE'
export const ADD_BOOK_START = 'ADD_BOOK_START'
export const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS'
export const ADD_BOOK_FAILURE = 'ADD_BOOK_FAILURE'
export const UPDATE_BOOK_START = 'UPDATE_BOOK_START'
export const UPDATE_BOOK_SUCCESS = 'UPDATE_BOOK_SUCCESS'
export const UPDATE_BOOK_FAILURE = 'UPDATE_BOOK_FAILURE'
export const DELETE_BOOK_START = 'DELETE_BOOK_START'
export const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS'
export const DELETE_BOOK_FAILURE = 'DELETE_BOOK_FAILURE'

const BASE_URL = "https://samirlilienfeld-oer-bookr.herokuapp.com/"

const token = localStorage.getItem("token");
const requestOptions = {
  headers: {
    authorization: token
  }
}

export const getBooks = () => dispatch => {
  dispatch({ type: GET_BOOKS_START })
  Axios
    .get(`${BASE_URL}/books/books/paging`, requestOptions)
    .then(res => {
      dispatch({ type: GET_BOOKS_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: GET_BOOKS_FAILURE, payload: err }))
}

export const deleteBook = id => dispatch => {
  dispatch({ type: DELETE_BOOK_START })
  Axios.delete(`${BASE_URL}/data/books/${id}`)
    .then(res => { dispatch({ type: DELETE_BOOK_SUCCESS, payload: res.data.id }) })
    .catch(err => dispatch({ type: DELETE_BOOK_FAILURE, payload: err }))
}