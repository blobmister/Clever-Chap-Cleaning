import './ErrorPage.css';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function ErrorPage() {
    return (
        <>
            <NavBar />
            <div className='err-page'>
                
                <div className="err-content">
                    <h1>404 page not found</h1>
                    <p>This page doesn't exist yet. Please navigate back to home.</p>
                </div>
                <Footer />
            </div>
        </>
    )
}