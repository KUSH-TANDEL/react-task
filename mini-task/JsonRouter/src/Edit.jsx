import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useEffect } from 'react'
function Edit() {

    const {id}=useParams()
    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const url = (`http://localhost:3000/users/${id}`);
    const navigate = useNavigate()

    useEffect(() => {
        getUserData()
        console.log(id)
    }, [])
    
    const getUserData=async ()=>{
        let response = await fetch(url)
        response = await response.json()
        setName(response.name)
        setAge(response.age)
        setEmail(response.email)
    
    }

    const updatedUserData = async ()=>{
        console.log(name,age,email)
        let response = await fetch(url,{
            method:"put",
            body:JSON.stringify({name,age,email})
        })
        response = await response.json()
        console.log(response);
        navigate("/")
        

    }



  return (
    <>
      <h2>Edit user data</h2><br/>
      <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter your Name' /> <br /> <br />
      <input type="number" value={age} onChange={(event)=>setAge(event.target.value)} placeholder='Enter your Age' /> <br /> <br />
      <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='Enter your Email' /> <br /> <br />
      <button onClick={updatedUserData} >Edit User Data</button>
    </>
  )
}

export default Edit