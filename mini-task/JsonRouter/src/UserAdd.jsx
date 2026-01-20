import { useState } from "react";

function UserAdd() {

    
const [name , setName] = useState('');
const [email, setEmail] = useState('');
const [age, setAge] = useState('');

const userData = async ()=>{
    const url = "http://localhost:3000/users";
    console.log(name,email,age)
    let response = await fetch(url,{
        method:"POST",
        body:JSON.stringify({name ,age ,email}) 
})
alert("User added successfully");
}




  return (
    <>
      <h3>Add user data</h3><br />
      <input type="text" onChange={(event)=>setName(event.target.value)} placeholder='Enter your Name' /> <br /> <br />
      <input type="number" onChange={(event)=>setAge(event.target.value)} placeholder='Enter your Age' /> <br /> <br />
      <input type="email" onChange={(event)=>setEmail(event.target.value)} placeholder='Enter your Email' /> <br /> <br />
      <button onClick={userData} >Add User</button>
    </>
  )
}

export default UserAdd