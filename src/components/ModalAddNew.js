import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { postCreateUser } from '../services/userService'
import { toast } from 'react-toastify'

const ModalAddNew = props => {
  const { show, handleClose } = props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSaveUser = async () => {
    let res = await postCreateUser(email, password)
    if (res && res.errCode === 0) {
      toast.success(res.message)
      setEmail('')
      setPassword('')
      handleClose()
    }
    console.log('Checcking res handleSaveUser', res)
    console.log('email', email, 'password', password)
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Add New</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSaveUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalAddNew
