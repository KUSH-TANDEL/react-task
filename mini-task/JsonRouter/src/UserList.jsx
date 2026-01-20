import { useState ,useEffect } from 'react'


function UserLIst() {
  const [getUserData, setGetUserdata] = useState([])

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    console.log(data);
    setGetUserdata(data);
  }

  return (
    <>
    <h1>Users Data</h1>

     {
      getUserData.map((user) => (
        <ul className='list-link' key={user.id}>
          <li>{user.name}</li>
          <li>{user.age}</li>
          <li>{user.email}</li>
        </ul>
      ))
     }
    </>
  )
}

export default UserLIst
