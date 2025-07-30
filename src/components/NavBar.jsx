import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import downarrow from '../assets/arrow-down.png';


function Dropdown({ isActive, items}) {
    return (
        <ul className={isActive ? 'dropdown active' : 'dropdown'}>
            {
                items.map((item) => {
                    return (
                        <li key={item.name}>
                            <Link to={item.to}>{item.name}</Link>
                        </li>
                    );
                })
            }
        </ul>
    )
}

export default function NavBar() {
    let [showAboutDrop, toggleAboutDrop] = useState(false);
    let [showServicesDrop, toggleServicesDrop] = useState(false);
    return (
        <nav className='navbar'>
            <Link to='/' className='logo'>
                <img alt='Clever Chap Logo'/>
            </Link>

            <ul className="nav-list">
                <li><Link to='/' className='nav-link'>Home</Link></li>
                <li><Link to='/get-quote' className='nav-link'>Quote Price</Link></li>

                <li onMouseEnter={() => toggleServicesDrop(true)} onMouseLeave={() => toggleServicesDrop(false)}>
                    <div className='nav-link'>Services<img src={downarrow} alt='dropdown button'/></div>
                    <Dropdown 
                        isActive={showServicesDrop}
                        items= {[
                            {name: 'Commercial Cleaning', to: '/commercial-cleaning'},
                            {name: 'Residential Cleaning', to: '/residential-cleaning'},
                        ]}
                    />
                </li>

                <li onMouseEnter={() => toggleAboutDrop(true)} onMouseLeave={() => toggleAboutDrop(false)}>
                    <div className='nav-link'>About Us<img src={downarrow} alt='dropdown button'/></div>
                    <Dropdown 
                        isActive={showAboutDrop}
                        items= {[
                            {name: 'Who We Are', to: '/about'},
                            {name: 'Contact', to: '/contact'},
                        ]}
                    />
                </li>

            </ul>

        </nav>
    )
}