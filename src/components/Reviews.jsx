import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Reviews.css';
import reviews from '../reviews.json';

function StarRating({ rating }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`} className="star full">★</span>);
    }

    if (hasHalfStar) {
    stars.push(<span key="half" className="star half">⯨</span>); // You can substitute with SVG or custom character
    }

    for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }

    return <div className="star-rating">{stars}</div>;
}

function ReviewPanel() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        
        <div className='wrapper'>
        <Carousel responsive={responsive} 
        infinite={true} 
        autoPlay={true} 
        showDots={true}
        arrows={false}
        autoPlaySpeed={2000}
        >
            {reviews.map((review, index) => (
                <div key={index} className='review-slide'>
                    <h3>{review.name}</h3>
                    <p>{review.review}</p>
                    <StarRating rating={review.score}/>
                </div>
            ))}
        </Carousel>
        </div>
    )

}

export default function Reviews() {

    return (
        <div className='reviews'>
            <h2>Read what our <span className='accent'>customers</span> have to say</h2>
            <ReviewPanel />
        </div>
    )
}