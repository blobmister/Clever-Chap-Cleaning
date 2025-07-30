import NavBar from '../components/NavBar.jsx';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./home.css";
import residential from '../assets/Residential.png';
import commercial from '../assets/Commercial.png';
import agedCare from '../assets/Aged Care.png';
import endOfLease from '../assets/End of Lease.png';
import Reviews from '../components/Reviews.jsx';


function Card1() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='card1'>
            <div className={`text ${isVisible ? 'active' : ''}`}>
                <h1>Professional Cleaning Services</h1>
                <Link to='/quote'><button>Get Free Quote!</button></Link>
            </div>
        </div>
    );
}

function Card2() {
    function ServiceElement({ name , img }) {
        return <Link to='/quote'>
            <li className='service-element'>
            <img className='service-icon' src={img} alt={ name }/>
            <p>{name}</p>
            </li>
        </Link>
    }
    
    return (
        <div className='card2'>
            <h1>Our Services</h1>
            <ul className='services'>
                <ServiceElement name="Residential" img={ residential }/>
                <ServiceElement name="Commercial" img={ commercial }/>
                <ServiceElement name="Aged Care" img={ agedCare }/>
                <ServiceElement name="End of Lease" img={ endOfLease }/>
            </ul>
        </div>
    );
}



export default function Home() {
    return (
        <div>
            <NavBar />
            <Card1 />
            <Card2 />
            <Reviews/>
        </div>
    )
}