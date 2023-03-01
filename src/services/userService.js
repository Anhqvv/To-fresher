import axios from '../utils/axiosCustomze'

export const postCreateUser = (email, password) => {
    return axios.post(`api/users/create-user`, { email, password})
}
export const fetchAllUser = async page => {
  return await axios.get(`api/users/${page}`)
}
