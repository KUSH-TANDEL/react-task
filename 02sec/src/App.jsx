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
    <div className=' d-flex bg-dark w-100 min-vh-100  text-info justify-content-center pt-5 '>
      <div className=' d-flex w-50 mx-auto rounded-5 px-4 my-3 justify-content-center text-info bg-light'> hello world</div>
    </div>
    </>
  )
}

export default App
