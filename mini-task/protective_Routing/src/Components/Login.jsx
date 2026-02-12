import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router'

function Login() {

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const authtoken = localStorage.getItem("Authtoken");
    const authtokenParsed = authtoken ? JSON.parse(authtoken) : null;

    useEffect(() => {
        if (authtokenParsed) {
            navigate('/');
        }
    }, [authtokenParsed])


    const handlechange = (e) => {
        const { name, value } = e.target;
        setLogin((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        if (!login.email || !login.password) {
            alert("Please fill all fields");
            return null;
        }
        localStorage.setItem("Authtoken", JSON.stringify(login));
        alert("Login Successful");
        navigate('/')
    }

    return (
        <div className='d-flex container justify-content-center'>
            <form >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control"
                        id="exampleInputEmail1" aria-describedby="emailHelp"
                        name="email" onChange={handlechange} value={login?.email} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">

                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        name="password" onChange={handlechange} value={login?.password} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button onClick={handleSubmit} className="btn btn-primary">LOGIN</button>
            </form>
        </div>

    )
}

export default Login