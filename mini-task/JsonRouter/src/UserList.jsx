import { useState ,useEffect  } from 'react'
import { useNavigate } from 'react-router-dom';

function UserLIst() {
  const [getUserData, setGetUserdata] = useState([])
 const navigate = useNavigate();
  useEffect(() => {
    getData();
  },[])

  const getData = async () => {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    console.log(data);
    setGetUserdata(data);
  }

  const deleteUser = async (id) => {
    let response = await fetch(`http://localhost:3000/users/${id}`,
        {method:"delete"} 
    )
    response = await response.json()
     getData()
     alert("Deleted successfully")
  }
    const edituser = (id) => {
        navigate(`/edit/${id}`);
    }


  return (
    <>
    <h1>Users Data</h1>
    <ul className='list-link header-list'>
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
        <li>Action</li>
    </ul>

     {
      getUserData.map((user) => (
        <ul className='list-link' key={user.id}>
          <li>{user.name}</li>
          <li>{user.age}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={()=>deleteUser(user.id)} >Delete</button>
            <button onClick={()=>edituser(user.id)} >Edit</button>
            </li>
        </ul>
      ))
     }
    </>
  )
}

export default UserLIst
