import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [nameErr, setNameErr] = useState()
  const [password, setPassword] = useState('')
  const [passwordErr, setpasswordErr] = useState()

  const handleChange = (e) => {
    setName(e.target.value)
    console.log(name)
    if (e.target.value.length > 5) {
      setNameErr("Enter less then 5 character")
    }
    else {
      setNameErr()
    }
  }


  const handlepassword = (e) => {
    setPassword(e.target.value)
    let regex = /^[A-Z0-9  ]+$/i;
    if (regex.test(e.target.value)) {
      setpasswordErr()
    }
    else {
      setpasswordErr("Only Number and Alpabets allowed")
    }
  }

  return (
    <>
      <input type="text" className={nameErr ? 'error' : ''}
        onChange={handleChange} placeholder="Enter name" />
      <div>{nameErr && nameErr}</div> <br /><br />

      <input type="text" className={passwordErr ? 'error' : ''}
        onChange={handlepassword} placeholder="Enter password" /><br /><br />
      <span>{passwordErr && passwordErr}</span> <br /><br />

      <button disabled={nameErr || passwordErr} >login</button>


    </>
  )
}

export default App
