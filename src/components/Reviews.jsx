import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Reviews.css';

function ReviewPanel() {
    const reviews = [
        { 
            name: "John Doe",
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis optio magnam sit soluta impedit quis dolor delectus maiores, harum consequuntur? Eos culpa aspernatur modi iure ad nobis itaque nisi? Et.",
            score: "5/5"
        },
        { 
            name: "Jane Doe",
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis optio magnam sit soluta impedit quis dolor delectus maiores, harum consequuntur? Eos culpa aspernatur modi iure ad nobis itaque nisi? Et.",
            score: "5/5"
        },
        { 
            name: "Eljohn Mercado",
            review: "Working like a slave",
            score: "0/5"
        },
        { 
            name: "William Smith",
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis optio magnam sit soluta impedit quis dolor delectus maiores, harum consequuntur? Eos culpa aspernatur modi iure ad nobis itaque nisi? Et.",
            score: "3/5"
        },
        { 
            name: "John Doe",
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis optio magnam sit soluta impedit quis dolor delectus maiores, harum consequuntur? Eos culpa aspernatur modi iure ad nobis itaque nisi? Et.",
            score: "5/5"
        },
    ];

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
        
        <div class='wrapper'>
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
                    <p>{review.score}</p>
                </div>
            ))}
        </Carousel>
        </div>
    )

}

export default function Reviews() {

    return (
        <div className='reviews'>
            <h1>Read what our <span class='accent'>customers</span> have to say</h1>
            <ReviewPanel />
        </div>
    )
}