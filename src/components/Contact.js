import { useEffect } from "react";
import email from "../assets/email.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import "../styles/Contact.css";

export default function Contact() {
    var childrenArray = [];
    
    useEffect(() => {
        var children = document.getElementById("selectors").children;    
        for (var i = 0; i < children.length; i++) {
            childrenArray.push(children[i].id);
        }
    }, [])

    const clickSelector = (event) => {
        var node = document.getElementById(event.target.id);
        node.style.backgroundColor = "#0D9488";
        node.style.color = "white";

        childrenArray.map(id => {
            if (event.target.id !== id ) {
                var childNode = document.getElementById(id);
                childNode.style.background = "rgb(241, 255, 242)";
                childNode.style.color = "#0D9488";
            }
        })
    }

    return (
        <div className="container-fluid contact_main my-5" id="contact">
            <div className="text_section d-flex justify-content-center align-items-start flex-column">
                <span className="text_heading">Ready to go for a project with us?</span>
                <span className="text_desc">We believe big ideas require hard work and continuous learning. Chain of respect are more valuable to us than chain of commands</span>
            </div>

            <div className="container form_main d-flex flex-wrap justify-content-center align-items-center">
                <div className="col-sm-4 d-flex flex-column justify-content-between align-items-center info">
                    <div className="d-flex flex-column justify-content-center align-items-center info_header">
                        <span className="info_heading">Contact Us</span>
                        <span className="info_desc">Contact us if you have any query</span>
                    </div>
                    
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
                <div className="col-sm-8 d-flex flex-column justify-content-center align-items-center form">
                    <form className="">
                        <div className="d-flex justify-content-center flex-wrap align-items-center">
                            <input onChange={(event) => console.log(event.target.value)} type="text" className="form-control" placeholder="First Name" />
                            <input type="text" className="form-control" placeholder="Last Name" />
                        </div>
                        
                        <div className="d-flex justify-content-center align-items-center flex-wrap">
                            <input type="email" className="form-control" placeholder="Email address" />
                            <input type="number" className="form-control" placeholder="Phone Number" />
                        </div>

                        <span className="mt-5">What is the topic of your message?</span>

                        <div className="d-flex justify-content-start align-items-center flex-wrap" id="selectors">
                            <span onClick={(event) => clickSelector(event)} className="radio_selector" id="web">Website/Software</span>
                            <span onClick={(event) => clickSelector(event)} className="radio_selector" id="devops">DevOps</span>
                            <span onClick={(event) => clickSelector(event)} className="radio_selector" id="ui/ux">Ui/Ux</span>
                            <span onClick={(event) => clickSelector(event)} className="radio_selector" id="api">API</span>
                        </div>

                        <textarea className="form-control" placeholder="Your message..."></textarea>

                        <button>Send message</button>
                    </form>
                </div>
            </div>

        </div>
    )
}