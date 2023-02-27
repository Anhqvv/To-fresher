import React from 'react'
import './App.scss'
import Header from './components/Header'
import TableUser from './components/TableUser'
import Container from 'react-bootstrap/Container'

const App = props => {
  return (
    <div className='App'>
      <Header />
      <Container>
        <TableUser />
      </Container>
    </div>
  )
}

export default App
