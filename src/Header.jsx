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
                    <Link to="/portfolio_page/About" className='menu'>About</Link>
                </li>
                <li>
                    <Link to="/portfolio_page/Portfolio" className='menu'>Portfolio</Link>
                </li>
                {/* <li>
                    <Link to="/portfolio_page/Resume" className='menu'>Resume</Link>
                </li> */}
                <li>
                    <Link to="/portfolio_page/Contact" className='menu'>Contact</Link>
                </li>
            </ul>
            <footer>
                <p>Anthony Shin</p>
            </footer>
        </div>
    )
}

export default Header;