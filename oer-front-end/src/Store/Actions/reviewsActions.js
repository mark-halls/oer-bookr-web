import Axios from 'axios'

const BASE_URL = "https://samirlilienfeld-oer-bookr.herokuapp.com/"

export const GET_REVIEWS_START = 'GET_REVIEWS_START'
export const GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS'
export const GET_REVIEWS_FAILURE = 'GET_REVIEWS_FAILURE'
export const ADD_REVIEW_START = 'ADD_REVIEW_START'
export const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS'
export const ADD_REVIEW_FAILURE = 'ADD_REVIEW_FAILURE'
export const UPDATE_REVIEW_START = 'UPDATE_REVIEW_START'
export const UPDATE_REVIEW_SUCCESS = 'UPDATE_REVIEW_SUCCESS'
export const UPDATE_REVIEW_FAILURE = 'UPDATE_REVIEW_FAILURE'
export const DELETE_REVIEW_START = 'DELETE_REVIEW_START'
export const DELETE_REVIEW_SUCCESS = 'DELETE_REVIEW_SUCCESS'
export const DELETE_REVIEW_FAILURE = 'DELETE_REVIEW_FAILURE'

const token = localStorage.getItem("token");
const requestOptions = {
  headers: {
    authorization: token
  }
}