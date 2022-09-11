import { useState } from "react";
import email from "../assets/email.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import "../styles/Contact.css";

export default function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formPhone, setFormPhone] = useState('');
    const [topic, setTopic] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // var childrenArray = [];
    // var topicArray = [];
    
    // useEffect(() => {
    //     var children = document.getElementById("selectors").children;
    //     for (var i = 0; i < children.length; i++) {
    //         childrenArray.push(children[i].id);
    //     }
    // }, [])

    // const clickSelector = (event) => {
    //     var node = document.getElementById(event.target.id);
    //     node.style.backgroundColor = "#0D9488";
    //     node.style.color = "white";

    //     childrenArray.map(id => {
    //         if (event.target.id !== id ) {
    //             var childNode = document.getElementById(id);
    //             childNode.style.background = "rgb(241, 255, 242)";
    //             childNode.style.color = "#0D9488";
    //         }
    //     })
    // }


    const handleSubmit = (event) => {
        setIsLoading(true);
        event.preventDefault();
        
        const header = {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: formEmail,
                phone: formPhone,
                message_topic: topic,
                message: message
            })
        }

        console.log(header.body);

        if (topic !== '') {
            fetch("https://pieagency.pythonanywhere.com/contactus/api/v1/contactus/create/", header)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setIsLoading(false);
                    alert("Message sent successfully!");
                })
        } else {
            alert("Please select the topic of your message");
            setIsLoading(false);
        }
        
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
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex justify-content-center flex-wrap align-items-center">
                            <input required onChange={(event) => setFirstName(event.target.value)} value={firstName} type="text" className="form-control" placeholder="First Name" />
                            <input required onChange={(event) => setLastName(event.target.value)} value={lastName} type="text" className="form-control" placeholder="Last Name" />
                        </div>
                        
                        <div className="d-flex justify-content-center align-items-center flex-wrap">
                            <input required onChange={(event) => setFormEmail(event.target.value)} value={formEmail} type="email" className="form-control" placeholder="Email address" />
                            <input required onChange={(event) => setFormPhone(event.target.value)} value={formPhone} type="number" className="form-control" placeholder="Phone Number" />
                        </div>

                        <span className="mt-5">What is the topic of your message?</span>

                        <div className="d-flex justify-content-start align-items-center flex-wrap" id="selectors">
                            <label htmlFor="Website/Software">
                                <input type="radio" name="topic" id="Website/Software" />
                                <span onClick={event => setTopic(event.target.innerText)}  className="radio_selector">Website/Software</span>
                            </label>
                            
                            <label htmlFor="DevOps">
                                <input type="radio" name="topic" id="DevOps" />
                                <span onClick={event => setTopic(event.target.innerText)}  className="radio_selector">DevOps</span>
                            </label>
                            
                            <label htmlFor="Ui/Ux">
                                <input type="radio" name="topic" id="Ui/Ux" />
                                <span  onClick={event => setTopic(event.target.innerText)} className="radio_selector">Ui/Ux</span>
                            </label>
                            
                            <label htmlFor="Other">
                                <input type="radio" name="topic" id="Other" />
                                <span onClick={event => setTopic(event.target.innerText)} className="radio_selector">Other</span>
                            </label>
                        </div>

                        <textarea onChange={(event) => setMessage(event.target.value)} value={message} required className="form-control" placeholder="Your message..."></textarea>

                        {!isLoading ? <button type="submit">Send message</button> : <button disabled type="submit">Sending...</button>}
                    </form>
                </div>
            </div>

        </div>
    )
}