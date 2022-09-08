import django from "../assets/django.svg";
import python from "../assets/python.svg";
import redis from "../assets/redis.svg";
import "../styles/Technologies.css";

export default function Technologies() {
    return (
        <div className="container my-5" id="technology">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <span className="section_heading">Technologies</span>
                <span className="section_desc">Technologies we use to provide the best service to our clients</span>
            </div>

            <div className="d-flex mt-5 justify-content-center flex-wrap align-items-center">
                <div className="tech_box shadow d-flex flex-column justify-content-center align-items-start">
                    <img src={redis} alt="tech" />
                    <span>Redis is an in-memory data structure store, used as a distributed, in-memory keyValue database, cache and message broker, with optional durability</span>
                </div>
                
                <div className="tech_box shadow d-flex flex-column justify-content-center align-items-start">
                    <img src={python} alt="tech" />
                    <span>Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.</span>
                </div>
                
                <div className="tech_box shadow d-flex flex-column justify-content-center align-items-start">
                    <img src={django} alt="tech" />
                    <span>Django is a free and open-source, Python-based web framework that follows the model–template–views architectural pattern. It is maintained by the Django Software Foundation</span>
                </div>
            </div>
        </div>
    )
}