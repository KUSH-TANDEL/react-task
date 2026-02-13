import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {

    const [name, setName] = useState('')  // NAME : emilys
    const [password, setPassword] = useState('') // PASSWORD : emilyspass


    const handleonSubmit = (e) => {
        e.preventDefault()
        const payload = {
            username: name,
            password: password
        }
        axios.post(
            'https://dummyjson.com/auth/login',
            payload,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then((res) => {
                localStorage.setItem('token', JSON.stringify(res.data.accessToken))
                console.log(res.data.accessToken)
            })
            .catch((err) => {
                console.log("Error occurred during login: or enter right credentials", err)
            })
    }

    return (
        <>
            <form onSubmit={handleonSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your username with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Login