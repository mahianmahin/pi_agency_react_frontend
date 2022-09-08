import icon2 from "../assets/android.svg";
import icon4 from "../assets/devops.svg";
import icon1 from "../assets/software_dev.svg";
import icon5 from "../assets/ui.svg";
import icon3 from "../assets/web.svg";
import "../styles/Services.css";

export default function Services() {
    return (
        <div className="services_main container mt-5" id="services">
            <div className="heading d-flex flex-column justify-content-center align-items-center">
                <span className="section_heading">Our Services</span>
                <span className="section_desc">Services we provide with the height level of professionalism</span>
            </div>

            <div className="d-flex mt-5 flex-wrap justify-content-center align-items-center">
                
                <div className="service_block d-flex flex-column justify-content-center align-items-center">
                    <img src={icon1} alt="icon" />
                    <span className="service_heading">Software Development</span>
                    <span className="service_desc">Get the powerful and efficient software solutions we provide</span>
                </div>
                
                <div className="service_block d-flex flex-column justify-content-center align-items-center">
                    <img src={icon2} alt="icon" />
                    <span className="service_heading">Android/iOS application</span>
                    <span className="service_desc">Harness the best out of our potential in android app development</span>
                </div>
                
                <div className="service_block d-flex flex-column justify-content-center align-items-center">
                    <img src={icon3} alt="icon" />
                    <span className="service_heading">Web Application</span>
                    <span className="service_desc">Get a fully functional and customised web application from our web development team</span>
                </div>
                
                <div className="service_block d-flex flex-column justify-content-center align-items-center">
                    <img src={icon4} alt="icon" />
                    <span className="service_heading">Site Reliability Engineering</span>
                    <span className="service_desc">Get the most reliable DevOps service from our Site Reliability Engineers</span>
                </div>
                
                <div className="service_block d-flex flex-column justify-content-center align-items-center">
                    <img src={icon5} alt="icon" />
                    <span className="service_heading">Ui/Ux Design</span>
                    <span className="service_desc">Get a modern and catchy Ui design and user experience from our Ui/Ux team</span>
                </div>
            
            </div>
        </div>
    )
}