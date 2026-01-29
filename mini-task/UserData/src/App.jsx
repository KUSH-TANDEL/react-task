import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { userData } from './UserData'

function App() {
  const [users, setUsers] = useState([])
  const [count,setCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const data = await userData();
      setUsers(data)
    }
    fetchData();
  }, [])

  console.log(users);


  return (
    <>
  <div className='cards'>
      {
        users.map((user) => (
            <div key={user.id}  className="card my-4 mx-4 ">
              <img src={user.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{user.firstName}</h5>
              </div>
              <div className="card-footer">
                <small className="text-muted">{user.address.address}</small>
              </div>
            </div>
        ))
      }    
</div>

















{/* <div>
  <a href="https://vite.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <div>
  <button onClick={() => setCount((count) => count + 1)}>
    Add {count}
  </button>
  <button onClick={() => setCount((count) => count>0?count - 1:0)}>
    Subtract {count}
  </button>
  </div>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p> */}

    </>
  )
}

export default App



