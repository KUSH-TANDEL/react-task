import { useState } from 'react'
import './App.css'
import { useReducer } from 'react'

const emptyData = {
  name:'',
  password:'',
  email:'',
  city:'',
  address:''
}

const reducer = (data,action)=>{
  return{...data,[action.type]:action.val}
}


function App() {

  const [state,dispatch] = useReducer(reducer,emptyData)
  console.log(state);
  

  return (
    <>
      <h1>Using useReducer</h1>
      <input type="text"  placeholder='Enter your name' 
      onChange={(event)=>dispatch({val:event.target.value,type:'name'})}
      /> <br /> <br />
      <input type="text"  placeholder='Enter your password' 
      onChange={(event)=>dispatch({val:event.target.value,type:'password'})}
      /> <br /> <br />
      <input type="text"  placeholder='Enter your email' 
      onChange={(event)=>dispatch({val:event.target.value,type:'email'})}
      /> <br /> <br />
      <input type="text"  placeholder='Enter your city' 
      onChange={(event)=>dispatch({val:event.target.value,type:'city'})}
      /> <br /> <br />  
      <input type="text"  placeholder='Enter your address' 
      onChange={(event)=>dispatch({val:event.target.value,type:'address'})}
      /> <br /> <br />

      <button>Details</button>
    </>
  )
}

export default App
