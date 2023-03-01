import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import ReactPaginate from 'react-paginate'
import { fetchAllUsers } from '../redux/action/action'
import { useDispatch, useSelector } from 'react-redux'

const TableUser = props => {
  const dispatch = useDispatch()
  const listUsers = useSelector(state => state.user.listUsers)
  const perPage = useSelector(state => state.user.perPage)
  const totalPage = useSelector(state => state.user.totalPage)
  useEffect(() => {
    dispatch(fetchAllUsers(1))
  }, [])

  const handlePageClick = e => {
    dispatch(fetchAllUsers(+e.selected + 1))
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
        //css paginate

        previousLabel='Previous'
        nextLabel='Next'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakLabel='...'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        //
        pageCount={totalPage}
        marginPagesDisplayed={4}
        pageRangeDisplayed={6}
        onPageChange={handlePageClick}
        containerClassName='pagination'
        activeClassName='active'
        // forcePage={3}
      />
    </>
  )
}

export default TableUser
