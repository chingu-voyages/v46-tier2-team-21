import React from 'react'
import './style.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h3 className='logo'>Recipe Box</h3>
            <ul className='nav-ul'>

                <li className='nav-li'>Home</li>
                <li className='nav-li'>Saved List</li>
            </ul>
        </nav>
    )
}

export default Navbar