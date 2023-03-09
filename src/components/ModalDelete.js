import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { deleteUser, fetchAllUsers } from '../redux/action/action'

import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'

const ModalDelete = props => {
  const data = useSelector(state => state.user.deleteData)
  let message = data.message

  const dispatch = useDispatch()
  const { show, handleClose, dataUserDelete } = props
  let id = dataUserDelete.id

  const handleDeleteUser = async () => {
    if (id) {
      await dispatch(deleteUser(id))
      await dispatch(fetchAllUsers(1))
      handleClose()
      toast.success(message)
    } else {
      console.log('delete failed')
    }
  }
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure delete this emaiil??? {dataUserDelete.email}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleDeleteUser}>
            Save Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalDelete
