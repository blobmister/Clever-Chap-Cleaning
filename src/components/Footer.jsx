import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() { 
    return (
        <div className='footer'>
            <img alt='Clever Chap Logo' src={null}/>
            <div className='footer-links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/residential-cleaning'>Residential Services</Link>
                <Link to='/commercial-cleaning'>Commercial Services</Link>
                <Link to='/get-quote'>Quote a Price</Link>
                <Link to='/contact'>Contact Us</Link>
            </div>

            <div className='copywrite'>
                <p>© 2025 Clever Chap Cleaning. All rights reserved.</p>
            </div>
        </div> 
    )
}