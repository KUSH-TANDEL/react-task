import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Suspense , use } from 'react';

const fatchUserData = () => 
  (fetch("https://dummyjson.com/users").then((response)=>response.json()));

const userResource = fatchUserData();

function App() {
  return (
    <>
     <div>user data</div>
     <Suspense fallback={<h1>loading...</h1>}>
     <User userResource={userResource} />
     </Suspense>
    </>
  )
}
export default App


const User =({userResource})=>{
  const userData = use(userResource)
  console.log(userData.users);
  return(
   <div>
     <h1>user list </h1>
     {
      userData?.users.map((user)=>(
        <h1 key={user.id}>{user.firstName}</h1>
      ))
     }
   </div>
  )
}