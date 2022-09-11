import arrow from "../assets/left_arrow.svg";
import "../styles/Reviews.css";

export default function Reviews() {
    const scrollLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft -= 500;
    }
    
    const scrollRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft += 500;
    }

    return (
        <div className="container reviews_main mt-5" id="reviews">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <span className="section_heading">What our clients say about us</span>
            </div>

            <div className="d-flex mt-3 review_container justify-content-start align-items-center" id="slider">
                
                <div className="review_box d-flex flex-column justify-content-center align-items-center">
                    <svg width='32' height='32' viewBox='0 0 90 72' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M38.6757 0.71875L24.9904 50.4835L20.4286 31.8217C26.3727 31.8217 31.2109 33.5496 34.9433 37.0055C38.6756 40.4614 40.5418 45.2305 40.5418 51.3129C40.5418 57.257 38.6065 62.0952 34.7359 65.8276C31.0036 69.4217 26.3036 71.2188 20.6359 71.2188C14.8301 71.2188 9.99182 69.4217 6.12123 65.8276C2.38888 62.0952 0.522705 57.257 0.522705 51.3129C0.522705 49.5158 0.660941 47.7879 0.937411 46.1291C1.21388 44.332 1.76682 42.2585 2.59624 39.9085C3.42565 37.5585 4.60065 34.4482 6.12123 30.5776L18.1477 0.71875H38.6757ZM87.6109 0.71875L73.9257 50.4835L69.3639 31.8217C75.308 31.8217 80.1462 33.5496 83.8786 37.0055C87.611 40.4614 89.4771 45.2305 89.4771 51.3129C89.4771 57.257 87.5418 62.0952 83.6712 65.8276C79.9389 69.4217 75.2389 71.2188 69.5712 71.2188C63.7654 71.2188 58.9271 69.4217 55.0565 65.8276C51.3242 62.0952 49.458 57.257 49.458 51.3129C49.458 49.5158 49.5962 47.7879 49.8727 46.1291C50.1492 44.332 50.7021 42.2585 51.5315 39.9085C52.3609 37.5585 53.5359 34.4482 55.0565 30.5776L67.083 0.71875H87.6109Z' fill='#0D7375' /> </svg>
                    <span className="review_desc">I've been working tirelessly with PiAgency for the past two months, and I can say that they are the best software solution provider out there. I've always had a problem finding good quality solutions that don't cost an arm and leg, but these guys have really changed my outlook on software development.</span>
                    <span className="review_name">Ashfaqul Majid</span>
                    <span className="review_designation">CEO of Chitroghor</span>
                </div>
                
                <div className="review_box d-flex flex-column justify-content-center align-items-center">
                    <svg width='32' height='32' viewBox='0 0 90 72' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M38.6757 0.71875L24.9904 50.4835L20.4286 31.8217C26.3727 31.8217 31.2109 33.5496 34.9433 37.0055C38.6756 40.4614 40.5418 45.2305 40.5418 51.3129C40.5418 57.257 38.6065 62.0952 34.7359 65.8276C31.0036 69.4217 26.3036 71.2188 20.6359 71.2188C14.8301 71.2188 9.99182 69.4217 6.12123 65.8276C2.38888 62.0952 0.522705 57.257 0.522705 51.3129C0.522705 49.5158 0.660941 47.7879 0.937411 46.1291C1.21388 44.332 1.76682 42.2585 2.59624 39.9085C3.42565 37.5585 4.60065 34.4482 6.12123 30.5776L18.1477 0.71875H38.6757ZM87.6109 0.71875L73.9257 50.4835L69.3639 31.8217C75.308 31.8217 80.1462 33.5496 83.8786 37.0055C87.611 40.4614 89.4771 45.2305 89.4771 51.3129C89.4771 57.257 87.5418 62.0952 83.6712 65.8276C79.9389 69.4217 75.2389 71.2188 69.5712 71.2188C63.7654 71.2188 58.9271 69.4217 55.0565 65.8276C51.3242 62.0952 49.458 57.257 49.458 51.3129C49.458 49.5158 49.5962 47.7879 49.8727 46.1291C50.1492 44.332 50.7021 42.2585 51.5315 39.9085C52.3609 37.5585 53.5359 34.4482 55.0565 30.5776L67.083 0.71875H87.6109Z' fill='#0D7375' /> </svg>
                    <span className="review_desc">I can't imagine doing my job without Pi-Agency. The software is so user-friendly and has made my life a lot easier. It's saved me hours of time in performing repetitive tasks and helped me get ahead of the game with such excellent features as social media tracking, analytics, and email spam filtering.</span>
                    <span className="review_name">Tajwar Islam</span>
                    <span className="review_designation">Director of Lane3 PCBs</span>
                </div>
                
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <div className="left_arrow">
                    <img onClick={scrollLeft} src={arrow} alt="left_arrow" />
                </div>
                
                <div className="right_arrow">
                    <img onClick={scrollRight} src={arrow} alt="right_arrow" />
                </div>
            </div>
        </div>
    )
}