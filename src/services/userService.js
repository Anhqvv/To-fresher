import axios from '../utils/axiosCustomze'

export const postCreateUser = (email, password, firstName, lastName) => {
  return axios.post(`api/users/create-user`, {
    email,
    password,
    firstName,
    lastName
  })
}

