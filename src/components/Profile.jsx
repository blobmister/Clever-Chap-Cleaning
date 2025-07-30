import React from 'react';
import './Profile.css';

export function OwnerProfile() {
    return (
        <div className='profile owner'>
            <h2>Meet The Owner</h2>
            <div className='content'>
                <div className='text-wrapper'>
                        <p>
                            Born and raised in the vibrant but challenging streets of El Salvador, our founder's story is
                            one of true perseverance and ambition. From a young age, he understood the value of hard work,
                            often taking on whatever jobs he could find to support his family. With limited resources but an
                            abundance of determination, he dreamed of building a better life—one built on integrity, service,
                            and the pride that comes from doing a job well.
                        </p>

                        <p>
                            After relocating and starting from scratch in a new country,
                            he found his calling in the cleaning industry. What began as an
                            entry-level position quickly turned into a passion for excellence.
                            He learned every detail of the trade—from the best products and techniques to
                            how to treat customers with the care and respect they deserve. Over time, his reputation for
                            thorough, reliable, and honest work grew, earning the trust of both residential and commercial clients.
                        </p>

                        <p>
                            Fueled by this success and a vision for something greater, he launched his own cleaning business—not
                            just as a job, but as a mission. Today, that mission lives on in every service we offer.
                            Whether it’s a one-time deep clean or a regular maintenance schedule, our team brings the same attention
                            to detail and commitment to satisfaction that our founder built his name on. His journey from the streets of
                            El Salvador to the homes and offices we serve today is a testament to the power of hard work, the importance of
                            community, and the belief that everyone deserves a clean, healthy space to live and work in.
                        </p>
                </div>
                <img alt='Clever Chap Owner Owen Jose McCann' src='https://via.placeholder.com/400x300'/>
            </div>
            
        </div>
    )
}

export function TeamProfile() {
    return (
        <div className='profile team'>
            <h2>Meet The Team</h2>
            <div className='content'>
                <img alt='Clever Chap Team' src='https://via.placeholder.com/400x300'/>
                <div className='text-wrapper'>
                    <p>
                      Our team is made up of dedicated professionals who take pride in delivering consistently
                      high-quality cleaning services. With years of experience in the trade, each member brings a strong work ethic,
                      attention to detail, and a shared commitment to customer satisfaction.
                      Whether it’s a one-off deep clean or regular maintenance, we approach every job with care and
                      precision to ensure exceptional results.
                    </p>
                    <p>
                        Many of our team members have been in the cleaning industry for over a decade and understand what it takes to meet the highest standards.
                        We use proven techniques, trusted products, and efficient systems to make sure every space we clean is left spotless and fresh.
                        At the core of our service is a genuine desire to help our clients enjoy cleaner, healthier environments—backed by reliable,
                        trustworthy service you can count on.
                    </p>
                </div>
            </div>
        </div>
    )
}
