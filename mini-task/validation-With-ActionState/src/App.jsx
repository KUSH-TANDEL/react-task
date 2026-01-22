import { useActionState, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const handleLogin = (prevData,formData) =>{
  let name = formData.get('name')
  let password = formData.get('password')
  let regex = /^[A-Z0-9]+$/i

  if(name.length>5){
  return {error: "Only 5 character is allowed"}
  }else if(!regex.test(password)){
  return {error: "Only number and alphabets"}
  }else {
  return{message: "Login done"}
  }
  
}


const [data,action,panding] = useActionState(handleLogin)
console.log(data);
  return (
    <>
    <h1> Validation With ActionState </h1>
    {
      data?.message &&   <span>{data.message}</span>
    }
    {
      data?.error &&   <span>{data.error}</span>
    }
    <form action={action}>
    <input type="text" name='name' placeholder='Enter your Name' /><br /> <br />
    <input type="text" name='password' placeholder='Enter your Password' /><br /> <br />
    <button>login</button>
    </form>
   
    </>
  )
}

export default App
