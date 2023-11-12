import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-items'>
                <h3 className='logo'>Recipe Box</h3>
                <ul className='nav-ul'>
                    <li className='nav-li'><Link className='nav-link' to='/'>Home</Link></li>
                    <li className='nav-li'><Link className='nav-link' to='/saved-list'>Saved List</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar