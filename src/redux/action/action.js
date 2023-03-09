import axios from '../../utils/axiosCustomze'
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR
} from './type'
//fetchAllUser
export const fetchAllUsers = page => {
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
//Edit User
export const putEditUser = (id, firstName, lastName) => {
  return async (dispatch, getstate) => {
    try {
      const data = await axios.put(`api/users/edit-user`, {
        id,
        firstName,
        lastName
      })
      if (data) {
        dispatch(editUserSuccess(data))
      }
    } catch (error) {
      dispatch(editUserError(error))
    }
  }
}

export const editUserSuccess = data => {
  return {
    type: EDIT_USER_SUCCESS,
    dataUsers: data
  }
}

export const editUserError = () => {
  return {
    type: EDIT_USER_ERROR
  }
}
//Delete User
export const deleteUser = id => {
  return async (dispatch, getstate) => {
    try {
      const data = await axios.delete(`api/users/delete-user/${id}`)
      console.log('data delete', data)
      if (data) {
        dispatch(deleteUserSuccess(data))
      }
    } catch (error) {
      dispatch(deleteUserError(error))
    }
  }
}

export const deleteUserSuccess = data => {
  return {
    type: DELETE_USER_SUCCESS,
    dataUsers: data
  }
}

export const deleteUserError = () => {
  return {
    type: DELETE_USER_ERROR
  }
}
