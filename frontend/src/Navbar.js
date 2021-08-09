import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to='/'><h1>The Notes</h1></NavLink>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create" style={{
                    color:'white',
                    backgroundColor:'#f2356d',
                    borderRadius:'8px'
                }}>New Note</NavLink>
            </div>
        </div>
    )
}

export default Navbar
