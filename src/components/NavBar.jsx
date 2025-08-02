import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import downarrow from '../assets/arrow-down.png';
import hamburger from '../assets/Hamburger_icon.svg';


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
    let [showList, toggleShowList] = useState(false);
    let [aboutClick, toggleAboutClick] = useState(false);
    let [serviceClick, toggleServiceClick] = useState(false);

    return (
        <nav className='navbar'>
            <div className="row1">
                <Link to='/' className='logo'>
                    <img alt='Clever Chap Logo'/>
                </Link>
                <button onClick={() => toggleShowList(prev => !prev)} className='hamburger'> <img src={hamburger} alt='hamburger icon'/></button>
            </div>

            <ul className={showList ? ("show nav-list") : ("nav-list")}>
                <li><Link to='/' className='nav-link'>Home</Link></li>
                <li><Link to='/get-quote' className='nav-link'>Quote Price</Link></li>

                <li 
                    onMouseEnter={() => toggleServicesDrop(true)} 
                    onMouseLeave={() => toggleServicesDrop(false)} 
                    onClick={() => {
                        toggleServiceClick(prev => !prev);
                        toggleAboutClick(false);
                    }}
                >
                    <div className='nav-link'>Services<img src={downarrow} alt='dropdown button'/></div>
                    <Dropdown 
                        isActive={(showServicesDrop || serviceClick)}
                        items= {[
                            {name: 'Commercial Cleaning', to: '/commercial-cleaning'},
                            {name: 'Residential Cleaning', to: '/residential-cleaning'},
                        ]}
                    />
                </li>

                <li onMouseEnter={() => 
                    toggleAboutDrop(true)} 
                    onMouseLeave={() => toggleAboutDrop(false)}
                    onClick={() => {
                        toggleAboutClick(prev => !prev)
                        toggleServiceClick(false);
                    }

                    }
                >
                    <div className='nav-link'>About Us<img src={downarrow} alt='dropdown button'/></div>
                    <Dropdown 
                        isActive={(showAboutDrop || aboutClick)}
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