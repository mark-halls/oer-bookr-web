import {
  GET_REVIEWS_START,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAILURE,
  ADD_REVIEW_START,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
  UPDATE_REVIEW_START,
  UPDATE_REVIEW_SUCCESS,
  UPDATE_REVIEW_FAILURE,
  DELETE_REVIEW_START,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAILURE
} from "../Actions/reviewsActions"


const initialState = {
  reviews: [],
  isLoadingReviews: false,
  isAddingReview: false,
  isUpdatingReview: false,
  isDeletingReview: false,
  error: ''
}

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS_START:
      return { ...state, isLoadingReviews: true, error: "" }
    case GET_REVIEWS_SUCCESS:
      return { ...state, isLoadingReviews: false, reviews: action.payload }
    case GET_REVIEWS_FAILURE:
      return { ...state, isLoadingReviews: false, error: action.payload }
    case ADD_REVIEW_START:
      return { ...state, isAddingReview: true, error: "" }
    case ADD_REVIEW_SUCCESS:
      return { ...state, isAddingReview: false }
    case ADD_REVIEW_FAILURE:
      return { ...state, isAddingReview: false, error: action.payload }
    case UPDATE_REVIEW_START:
      return { ...state, isUpdatingReview: true, error: "" }
    case UPDATE_REVIEW_SUCCESS:
      return { ...state, isUpdatingReview: false }
    case UPDATE_REVIEW_FAILURE:
      return { ...state, isUpdatingReview: false, error: action.payload }
    case DELETE_REVIEW_START:
      return { ...state, isDeletingReview: true, error: '' }
    case DELETE_REVIEW_SUCCESS:
      return { ...state, isDeletingReview: false }
    case DELETE_REVIEW_FAILURE:
      return { ...state, isDeletingReview: false, error: action.payload }
    default:
      return state
  }
}
