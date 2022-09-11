import email from "../assets/email.svg";
import facebook from "../assets/footer_facebook.svg";
import linkedin from "../assets/footer_linkedin.svg";
import footer_logo from "../assets/footer_logo.svg";
import mail from "../assets/footer_mail.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import "../styles/Footer.css";

export default function Bottom() {
    return (
        <div className="container-fluid footer_main">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 d-flex justify-content-start align-items-center">
                        <div className="d-flex flex-wrap justify-content-center align-items-center footer_logo">
                            <img src={footer_logo} alt="footer_logo" />
                            <div className="d-flex flex-column justify-content-center align-items-start footer_text">
                                <span>We believe big ideas require hard work and continuous learning. Chain of respect are more valuable to us than chain of commands.</span>
                                <div className="d-flex justify-content-center align-items-center footer_icons">
                                    <a href="mailto:piagency2022@gmail.com"><img src={mail} alt="icon" /></a>
                                    <a href="https://www.facebook.com/piagencyy" target="blank"><img src={facebook} alt="icon" /></a>
                                    <a href="https://www.linkedin.com/company/piagency2022" target="blank"><img src={linkedin} alt="icon" /></a>
                                </div> 
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 mt-5 d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column justify-content-center align-items-start info_footer">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={phone} alt="phone_icon" />
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <span>+88 01717804346</span>
                                    <span>+88 01876516367</span>
                                </div>
                            </div>
                            
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={email} alt="phone_icon" />
                                <span>piagency2022@gmail.com</span>
                            </div>
                            
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={location} alt="phone_icon" />
                                <span>Baridhara DOHS, Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}