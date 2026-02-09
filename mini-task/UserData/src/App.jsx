import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { userData } from './UserData'

function App() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(8)

  useEffect(() => {
    const fetchData = async () => {
      const data = await userData();
      setUsers(data.slice((page - 1) * limit, page * limit));
      
    }
    fetchData();
  }, [page, limit]);

  console.log(users);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(userData().length / limit); i++) {
    pageNumbers.push(i);
  }

const totalpages = Math.ceil( userData().length / limit);




  return (
    <>
  <div className='cards w-100'>
      {
        users.map((user) => (
          <div key={user.id} className=''>
            <div key={user.id}  className="card my-4 mx-4 ">
              <img src={user.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{user.firstName}</h5>
              </div>
              <div className="card-footer">
                <small className="text-muted flex-grow-1 ">{user.address.address}</small>
              </div>
            </div>
            </div>
        ))
      }    
</div>



<div className="d-flex justify-content-center my-4">
<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><button className="page-link" onClick={() => setPage(page>1?page - 1: page )}>Previous</button></li>
    {page > 1 && (
      <li className="page-item"><button className="page-link" onClick={() => setPage(page - 1)}>{page - 1}</button></li>
    )}
    <li className="page-item active"><button className="page-link" onClick={() => setPage(page)}>{page}</button></li>
    <li className="page-item"><button className="page-link" onClick={() => setPage(page + 1 )}>{page + 1}</button></li>
    <li className="page-item"><button className="page-link" onClick={() => setPage(page + 2)}>{page + 2}</button></li>
    <li className="page-item"><button className="page-link" onClick={() => setPage(page + 1 )}>Next</button></li>
  </ul>
</nav>
</div>
    </>





  )
}

export default App



