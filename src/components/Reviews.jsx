import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Reviews.css';
import reviews from '../reviews.json';
import star from '../assets/star.svg';
import halfStar from '../assets/half-star.svg';

function StarRating({ rating }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
    stars.push(<img src={star} key={`full-${i}`} className="star full"/>);
    }

    if (hasHalfStar) {
    stars.push(<img src={halfStar} key="half" className="star half"/>); // You can substitute with SVG or custom character
    }

    for (let i = 0; i < emptyStars; i++) {
    stars.push(<img src={star} key={`empty-${i}`} className="star empty"/>);
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
          breakpoint: { max: 1024, min: 0 },
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