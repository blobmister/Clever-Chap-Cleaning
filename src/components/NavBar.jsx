import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import downarrow from '../assets/arrow-down.png';


function Dropdown({ isActive }) {
    return (
        <ul className={isActive ? 'dropdown active' : 'dropdown'}>
            <li><Link to='about'>Who We Are</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
        </ul>
    )
}

export default function NavBar() {
    let [showDrop, toggleDrop] = useState(false);
    return (
        <nav className='navbar'>
            <div className='logo'>
                <img alt='Clever Chap Logo'/>
            </div>

            <ul className="nav-list">
                <li><Link to='/' className='nav-link'>Home</Link></li>
                <li><Link className='nav-link'>Quote Price</Link></li>
                <li onMouseEnter={() => toggleDrop(true)} onMouseLeave={() => toggleDrop(false)}>
                    <div className='nav-link'>About Us<img src={downarrow} alt='dropdown button'/></div>
                    <Dropdown isActive={showDrop}/>
                </li>
            </ul>

        </nav>
    )
}