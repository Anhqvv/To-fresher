import axios from '../../utils/axiosCustomze'
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from './type'
//fetchAllUser
export const fetchAllUsers = (page) => {
  return async (dispatch, getstate) => {
    dispatch(fetchUserRequest())
    try {
      const data = await axios.get(`api/users/${page}`)
      if (data) {
        dispatch(fetchUserSuccess(data))
      }
    } catch (error) {
      dispatch(fetchUserError())
    }
  }
}

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const fetchUserSuccess = data => {
  return {
    type: FETCH_USER_SUCCESS,
    dataUsers: data
  }
}

export const fetchUserError = () => {
  return {
    type: FETCH_USER_ERROR
  }
}
//
