import { useState ,Activity } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showHome, setShowHome] = useState(true)

  return (
    <>
      <h1>Using Activity</h1>
      <button onClick={()=>setShowHome(true)} >home page</button>
      <button onClick={()=>setShowHome(false)} >user page</button>
      <Activity mode={showHome==true?"visible":"hidden"}>
        <Home />
      </Activity>
      <Activity mode={showHome==false?"visible":"hidden"}>
        <UserForm />
      </Activity>


    </>
  )
}

const Home = ()=>{
  return(<h3>Home page</h3>)
}

const UserForm = ()=>{
  return(
    <>
    <br /><br />
    <input type="text" placeholder='Enter your Name' />
    </>
  )
}

export default App
