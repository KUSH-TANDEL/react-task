import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserLIst from './UserList'
import UserAdd from './UserAdd'
import { NavLink, Route, Routes } from 'react-router'
import Edit from './Edit'

function App() {


  return (
    <>
    <ul className='nav-ul'>
      <li>
        <NavLink to="/">Data List</NavLink>
      </li>
      <li>
        <NavLink to="/add">Add User</NavLink>
      </li>
    </ul>
      
      <Routes>
        <Route path='/' element={<UserLIst />} />
        <Route path='/add' element={<UserAdd />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>

    </>
  )
}

export default App
