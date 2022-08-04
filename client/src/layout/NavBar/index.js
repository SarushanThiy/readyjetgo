import React from 'react'
import { NavLink } from 'react-router-dom';
import "./navbar.css"
import { FaHome } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { RiLogoutCircleLine } from "react-icons/ri";

function index() {
  return (
    <nav className="navbar">
      <NavLink className="nav-home" role="nav-home" to='/home' style={({ isActive }) => ({
              color: isActive ? '' : '',
              background: isActive ? '' : '',
              fontSize: '3rem',
              margin: '50px',
              textDecoration: 'none'
              
            })}>< FaHome size={60}/></NavLink>
      <NavLink className="main" to='/main' style={({ isActive }) => ({
              fontSize: '3rem',
              margin: '50px',
              textDecoration: 'none'
            })}><GiCarWheel size={60}/></NavLink>
      <NavLink className="login" to='/login' style={({ isActive }) => ({
              color: isActive ? '' : '',
              background: isActive ? '' : '',
              fontSize: '3rem',
              margin: '50px',
              textDecoration: 'none'
            })}><RiLogoutCircleLine size={60}/></NavLink>
    </nav>
  )
}

export default index
