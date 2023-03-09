import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { putEditUser, fetchAllUsers } from '../redux/action/action'

import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

const ModalEditUser = props => {
  const dispatch = useDispatch()
  const { show, handleClose, dataEdit } = props
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  let id = dataEdit.id
  useEffect(() => {
    if (show) {
      setLastName(dataEdit.lastName)
      setFirstName(dataEdit.firstName)
    }
  }, [dataEdit])
  const handleEditUser = async () => {
    await dispatch(putEditUser(id, firstName, lastName))
    handleClose()
    toast.success('OK')
    dispatch(fetchAllUsers(1))
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
          <Modal.Title>Modal Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>First Name: </Form.Label>
              <Form.Control
                type='text'
                placeholder='First Name'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Last Name: </Form.Label>
              <Form.Control
                type='text'
                placeholder='Last Name'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleEditUser}>
            Save Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalEditUser
