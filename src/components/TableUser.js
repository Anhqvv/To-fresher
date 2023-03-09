import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import ReactPaginate from 'react-paginate'
import { fetchAllUsers } from '../redux/action/action'
import { useDispatch, useSelector } from 'react-redux'
import ModalEditUser from './ModalEditUser'
import ModalDelete from './ModalDelete'

const TableUser = props => {
  const [isShowModalEditUser, setIsShowModalEditUser] = useState(false)
  const [dataUserEdit, setDataUserEdit] = useState({})
  const [isShowModalDelete, setIsShowModalDelete] = useState(false)
  const [dataUserDelete, setDataUserDelete] = useState({})

  const handleClose = user => {
    setIsShowModalDelete(false)
  }
  const dispatch = useDispatch()
  const listUsers = useSelector(state => state.user.listUsers)
  const page = useSelector(state => state.user.page)
  const perPage = useSelector(state => state.user.perPage)
  const totalPage = useSelector(state => state.user.totalPage)
  useEffect(() => {
    dispatch(fetchAllUsers(1))
  }, [])

  const handlePageClick = e => {
    dispatch(fetchAllUsers(+e.selected + 1))
  }
  const handeShowModalEdit = user => {
    setIsShowModalEditUser(true)
    setDataUserEdit(user)
  }
  const handleShowModalDelete = user => {
    setIsShowModalDelete(true)
    setDataUserDelete(user)
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
                  <td>
                    <button
                      className='btn btn-warning mx-4'
                      onClick={() => handeShowModalEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className='btn btn-danger'
                      onClick={() => handleShowModalDelete(user)}
                    >
                      Delete
                    </button>
                  </td>
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
      <ModalEditUser
        show={isShowModalEditUser}
        handleClose={handleClose}
        dataEdit={dataUserEdit}
      />
      <ModalDelete
        show={isShowModalDelete}
        handleClose={handleClose}
        dataUserDelete={dataUserDelete}
      />
    </>
  )
}

export default TableUser
