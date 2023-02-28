import axios from '../utils/axiosCustomze' 
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import ReactPaginate from 'react-paginate';

const TableUser = props => {
  const [listUsers, setListUsers] = useState([])
  const [totalUsers,setTotalUsers] = useState('')
  const [totalPages,setTotalPages] = useState('')
  // const [page,setPage] = useState('1')
  useEffect(() => {
    fetchAllUser(1)
  }, [])

  const fetchAllUser = async (numberpage) => {
    let res = await axios.get(`api/users/${numberpage}`)
    if (res && res.data) {
      let dataUser = res.data
      setListUsers(dataUser)
      setTotalUsers(res.total)
      setTotalPages(res.total_pages)
    }
  }

  const handlePageClick = (e) => {
    fetchAllUser(+e.selected + 1)
  }
  return (
    <>
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
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={totalPages}
        marginPagesDisplayed={4}
        pageRangeDisplayed={6}
        onPageChange={handlePageClick }
        containerClassName="pagination"
        activeClassName="active"
        forcePage={3}
      />
    </>
    
  )
}

export default TableUser
