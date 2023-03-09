import React, { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import TableUser from './components/TableUser'
import Container from 'react-bootstrap/Container'
import ModalAddNew from './components/ModalAddNew'
import { ToastContainer, toast } from 'react-toastify'
import ModalEditUser from './components/ModalEditUser'

const App = props => {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)
  const handleClose = () => {
    setIsShowModalAddNew(false)

  }
  return (
    <>
      <div className='app-container'>
        <Header />
        <Container>
          <div className='add-new my-3'>
            <div className='table-name'>List Users: </div>
            <button
              className='btn btn-success'
              onClick={() => setIsShowModalAddNew(true)}
            >
              Add New User
            </button>
          </div>
          <TableUser />
        </Container>

        <ModalAddNew show={isShowModalAddNew} handleClose={handleClose} />
      </div>
      <ToastContainer
        position='top-right'
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}

export default App
