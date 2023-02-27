import React from 'react'
import './App.scss'
import Header from './components/Header'
import TableUser from './components/TableUser'

const App = props => {
  return (
    <div className='App'>
      <Header />
      <TableUser />
    </div>
  )
}

export default App
