import {
  DELETE_USER_ERROR,
  DELETE_USER_SUCCESS,
  EDIT_USER_ERROR,
  EDIT_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS
} from '../action/type'

const INITIAL_STATE = {
  listUsers: [],
  page: '',
  perPage: '',
  totalpage: '',
  deleteData: {}
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state
      }

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        listUsers: action.dataUsers.data,
        page: action.dataUsers.page,
        perPage: action.dataUsers.per_page,
        totalPage: action.dataUsers.total_pages
      }
    case FETCH_USER_ERROR:
      return {
        ...state
      }
    //Edit
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        listUsers: action.dataUsers.data
      }
    case EDIT_USER_ERROR:
      return {
        ...state
      }
    //Delete
    case DELETE_USER_SUCCESS:
      console.log('DELETE_USER_SUCCESS11', action.dataUsers)

      return {
        ...state,
        deleteData: action.dataUsers
      }
    case DELETE_USER_ERROR:
      console.log('DELETE_USER_ERROR', action)

      return {
        ...state
      }
    default:
      return state
  }
}

export default userReducer
