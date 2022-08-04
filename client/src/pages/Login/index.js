import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import Header from '../../layout/Header';
import { NavLink } from 'react-router-dom';
import "./login.css";
import styled from "styled-components";


function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const responseToken = await fetch('https://readyjetgoserve.herokuapp.com/api/login/', {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      headers: { 'Content-Type': 'application/json' }
    })

    const token = await responseToken.json()
    localStorage.setItem('jwt', token.jwt)

    if (token.jwt) {

      const responseAuth = await fetch('https://readyjetgoserve.herokuapp.com/api/auth/', {
        method: 'POST',
        body: JSON.stringify({ token: token.jwt }),
        headers: { 'Content-Type': 'application/json' }
      })
      const content = await responseAuth.json()
      localStorage.setItem('username', content.username)
      dispatch({
        type: "SET_USERNAME",
        value: content.username
      })
      setRedirect(true)

    } else if (token.detail) {

      alert('Wrong Username or Password. Try again!!')
    }
  }

  if (redirect) {
    navigate('/home')
  }



  return (

    <>
      <Header />

      <div className="formdiv">
        <form role="login" data-testid="loginform" className="loginForm" onSubmit={handleSubmit}>
          <h1 id="title">Sign In</h1>
          <input type='text' placeholder="Username" id="username" onChange={(e) => setUsername(e.target.value)}></input>
          <input type='password' placeholder="Password" id='password' onChange={(e) => setPassword(e.target.value)}></input>
          <a className="forgot" href="#">Forgot Your Password?</a>
          <a className="forgot" href="/register">Not a member?  Create Account Now</a>
          <input type='submit' id="loginButton" value='Sign in'></input>

        </form>
        <div className="box">
        </div>

        <div className="box2" data-testid='RJG'>
          <h2>Ready, Jet, Go!</h2>
          <img id="areo" src="https://cdn-icons-png.flaticon.com/512/201/201623.png"></img>
        </div>
      </div>


    </>
  )
}

export default Login
