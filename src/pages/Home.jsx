import NavBar from '../components/NavBar.jsx';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./home.css";
import Reviews from '../components/Reviews.jsx';
import ServiceMap from '../components/ServiceMap.jsx';
import Values from '../components/Values.jsx';
import Services from '../components/Services.jsx';
import { OwnerProfile, TeamProfile } from '../components/Profile.jsx';
import Footer from '../components/Footer.jsx';



function Title() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='title'>
            <div className={`text ${isVisible ? 'active' : ''}`}>
                <h1>Professional Cleaning Services</h1>
                <Link to='/get-quote'><button>GET FREE QUOTE</button></Link>
            </div>
        </div>
    );
}

function Card3() {
    return (
        <div className='card3'>
            <div className='text'>
                <h2>Service Area</h2>
                <p> 
                    We proudly offer professional cleaning services across a wide area of Sydney. 
                    Our team serves homes and businesses in the following council regions: Blacktown City Council, 
                    Penrith City Council, City of Parramatta Council, The Hills Shire, Fairfield City Council, 
                    Liverpool City Council, Canterbury-Bankstown Council, Cumberland City Council, Strathfield Municipal Council, 
                    Burwood Municipal Council, Inner West Council, and Sydney City Council. 
                    Whether you’re looking for a one-off deep clean or regular maintenance, we’re here to help keep your space spotless.
                </p>
            </div>

            <div className="map-wrapper">
                <ServiceMap />
            </div>
            
        </div>
    )
}



export default function Home() {
    return (
        <div>
            <NavBar />
            <Title />
            <Services />
            <Reviews/>
            <Card3 />
            <Values />
            <OwnerProfile />
            <TeamProfile />
            <Footer />
        </div>
    )
}