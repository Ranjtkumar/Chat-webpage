import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   <nav className='header-nav py-2 text-lg font-bold'>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/chat">Chat</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/login">Login</NavLink>
   </nav>
  )
}
