import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-items'>
                <h3 className='logo'>Recipe Box</h3>
                <p className='footer-message'>
                  Developed by Chingu Voyage 46 Team 21 
                  <Link to='https://github.com/chingu-voyages/v46-tier2-team-21'>Github</Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer