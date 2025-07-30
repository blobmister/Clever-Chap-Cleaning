import React from 'react';
import { Link } from 'react-router-dom';
import residential from '../assets/Residential.png';
import commercial from '../assets/Commercial.png';
import agedCare from '../assets/Aged Care.png';
import endOfLease from '../assets/End of Lease.png';
import './Services.css';


export default function Services() {
    function ServiceElement({ name , img }) {
        return <Link to='/quote'>
            <li className='service-element'>
            <img className='service-icon' src={img} alt={ name }/>
            <p>{name}</p>
            </li>
        </Link>
    }
    
    return (
        <div className='service-wrapper'>
            <h2>Our Services</h2>
            <ul className='services'>
                <ServiceElement name="Residential" img={ residential }/>
                <ServiceElement name="Commercial" img={ commercial }/>
                <ServiceElement name="Aged Care" img={ agedCare }/>
                <ServiceElement name="End of Lease" img={ endOfLease }/>
            </ul>
        </div>
    );
}