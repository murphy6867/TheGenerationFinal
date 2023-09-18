import './Login.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

  return (
    <>
      <h1 className='uppercase underline text-xl'>hello world</h1>
      <h2>test branch 1000</h2>


      <div id='temporary-link'>
        <h4>temporary link for checking</h4>
        <ul>
          <Link to = "home">
            <li>Link to Home</li>
          </Link>
          <Link to = "profile">
            <li>Link to Profile</li>
          </Link>
          <Link to = "register">
            <li>Link to Register</li>
          </Link>
          <Link to = "setting">
            <li>Link to Setting</li>
          </Link>
          <Link to = "form">
            <li>Link to Form</li>
          </Link>  
        </ul>
      </div>
    </>
  )
}

export default Login
