import axios from 'axios'
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'

const TableUser = props => {
  const [listUsers, setListUsers] = useState([])
  useEffect(() => {
    fetchAllUser()
  }, [])

  const fetchAllUser = async () => {
    let res = await axios.get('http://localhost:8888/api/users/2')
    if (res && res.data && res.data.data) {
      let dataUser = res.data.data
      setListUsers(dataUser)
    }
    console.log('fetchAllUser: ', res)
  }
  console.log('listUsers', listUsers)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
              </tr>
            )
          })}
      </tbody>
    </Table>
  )
}

export default TableUser
