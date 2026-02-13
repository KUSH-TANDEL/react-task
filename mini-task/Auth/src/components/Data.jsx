import axios from 'axios'
import { useState } from 'react'
const Data = () => {

    const [userData, setUserData] = useState()

    const getdata = () => {

        const token = JSON.parse(localStorage.getItem('token'))


        const headers = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }


        axios.get('https://dummyjson.com/auth/me', headers)
            .then((res) => {
                setUserData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log("Error fetching user data:", err)
            })

    }

    const Logout = () => {
        setUserData(null)
        localStorage.removeItem('token')
    }

    return (
        <>
            <div className="p-0 m-0  container mt-4 float-start">
                <button className='btn btn-primary' onClick={getdata} >user data</button>
                <button className='btn btn-danger' onClick={Logout}>logout</button>
            </div>
            <div>
                <div>
                    {userData && (
                        <>
                            <p>name : {userData.firstName} {userData.lastName}</p>
                            <p>email : {userData.email}</p>
                            <p>phone : {userData.phone}</p>
                            <p>age : {userData.age}</p>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Data