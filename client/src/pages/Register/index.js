import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../layout/Header';
import "./register.css";

function Register() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const options = {
            method: 'POST',
            body: JSON.stringify({ username: username, password: password, password_confirmation: confirmPass }),
            headers: { 'Content-Type': 'application/json' }
        }
        await fetch('https://readyjetgoserve.herokuapp.com/api/register/', options)
        setRedirect(true)
    }

    if (redirect) {
        navigate('/login')
    }

    return (
        <>
            <Header />
            <div className="formdiv">
                <form role="register" className="registerForm" onSubmit={handleSubmit}>
                    <h1 id="title" data-testid="h1">Register</h1>
                    <input type='text' placeholder='Enter username' id="username" onChange={(e) => setUsername(e.target.value)}></input>
                    <input type='password' placeholder='Enter password' id='password' onChange={(e) => setPassword(e.target.value)}></input>
                    <input type='password' placeholder='Confirm password' id='confirm_password' onChange={(e) => setConfirmPass(e.target.value)}></input>
                    <input type='submit' id="signupButton" value='Sign up'></input>
                    <a className='return-to-login' href="/login">
                        Made an account already? Click here to login.
                    </a>
                </form>
                <div className="box">
                </div>


                <div className="box2">
                    <h2>"The only bug you want is the travel bug"</h2>
                    <img src="https://cdn-icons-png.flaticon.com/512/201/201623.png"></img>
                </div>
            </div>
        </>
    )
}

export default Register
