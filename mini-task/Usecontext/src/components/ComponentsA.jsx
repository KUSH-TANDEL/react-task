import React, { useState, createContext } from 'react'
import ComponentsB from './componentsB'

export const UserContext = createContext()

const ComponentsA = () => {

  const [user, setUser] = useState("John")


  return (
    <>
    <div className='box'>
    <div>componentsA</div>
    <div>{user}</div>
    <UserContext.Provider value={user}>
      <ComponentsB />
    </UserContext.Provider>
    </div>
    </>
  )
}

export default ComponentsA