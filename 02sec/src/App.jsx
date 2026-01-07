import { useState ,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenetator = useCallback (() => {
    let pass = ""
    let str=
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str +="!@#$%^&*()_+{}|:<>?-=[];',./`~"

    for (let i= 0; i <= str.length; i++) {
    let char = Math.floor(Math.random()*str.length + 1) 
      pass += str.charAt(char)
    } 

    setPassword(pass)


  } , [length,numAllowed,charAllowed,setPassword])


  return (
    <>
    <div className='text-info justify-content-center pt-5 '>
      <div className=' container   w-50 mx-auto rounded-5 p-4 my-3 justify-content-center text-info  bg-light '>
        <h1 className=' text-center' >Password Generter</h1> 
        <div className=' w-50 container my-5 py-5 overflow-hidden rounded-3 d-flex justify-content-center ' > 
          <input 
          type="text" 
          className=' btn btn-outline-light border-0 fs-4 text-center text-dark' placeholder='password' value={password} readOnly />
          <button className='btn btn-primary'>copy</button>
        </div> 
        <div className='d-flex justify-content-center'>
          <button className='btn btn-primary'>copy</button><button className='btn btn-primary'>copy</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
