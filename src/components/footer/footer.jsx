import { Link } from 'react-router-dom'
import githubLogo from '/assets/github-mark.png';
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-items'>
                <p className='footer-message'>
                  Chingu Voyage 46 Team 21: 
                  <Link className='footer-link' to='https://github.com/chingu-voyages/v46-tier2-team-21'><img id='footer-img' src={githubLogo}></img><span>Github</span></Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer