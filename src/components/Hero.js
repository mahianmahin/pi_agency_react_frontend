import "../styles/Hero.css";
import Globe from "./Glob";

export default function Hero() {
    return (
        <div className="hero_m container">
            <div className="row">
                <div className="hero_block col-sm-5 d-flex flex-column align-items-start justify-content-center">
                    <span className="greeting">Hello, we are</span>
                    <span className="brand">π-AGENCY.</span>
                    <span className="text">Here at π-AGENCY, we establish an approach understanding the business cases while maintaining the quality of the product and satisfaction of the customer.</span>
                    <a href="#contact">Contact Us</a>
                </div>
                <div className="hero_block glob col-sm-7 d-flex justify-content-center align-items-center">
                    <Globe />
                </div>
            </div>
        </div>
    )
}