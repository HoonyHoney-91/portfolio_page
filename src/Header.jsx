import './style/Header.css'
import { Link } from 'react-router-dom'

const Header = (prop) =>{
    return (
        <div className='SideNav'>
            <div className='logoImage'>
                <img src="src/image/moving.gif" alt="" />
            </div>
            <ul className="navItems">
                <li>
                    <Link to="/About" className='menu'>About</Link>
                </li>
                <li>
                    <Link to="/Portfolio" className='menu'>Portfolio</Link>
                </li>
                {/* <li>
                    <Link to="/Resume" className='menu'>Resume</Link>
                </li> */}
                <li>
                    <Link to="/Contact" className='menu'>Contact</Link>
                </li>
            </ul>
            <footer>
                <p>Anthony Shin</p>
            </footer>
        </div>
    )
}

export default Header;