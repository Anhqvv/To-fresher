import {
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS
} from '../action/type'

const INITIAL_STATE = {
  listUsers: [],
  page: '',
  perPage: '',
  totalpage: ''
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      console.log('FETCH_USER_REQUEST', action)
      return {
        ...state
      }

    case FETCH_USER_SUCCESS:
      console.log('FETCH_USER_SUCCESS', action)

      return {
        ...state,
        listUsers: action.dataUsers.data,
        page: action.dataUsers.page,
        perPage: action.dataUsers.per_page,
        totalPage: action.dataUsers.total_pages,
      }
    case FETCH_USER_ERROR:
      console.log('FETCH_USER_ERROR', action)

      return {
        ...state
      }

    default:
      return state
  }
}

export default userReducer
