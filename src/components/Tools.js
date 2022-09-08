import aws from "../assets/aws.svg";
import django from "../assets/django.svg";
import docker from "../assets/docker.svg";
import js from "../assets/js.svg";
import postgre from "../assets/postgre.svg";
import python from "../assets/python.svg";
import react from "../assets/react.svg";
import redis from "../assets/redis.svg";
import "../styles/Tools.css";

export default function Tools() {
    return (
        <div className="container my-5" id="tools">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <span className="section_heading">Our Preferred Tools</span>
                <span className="section_desc">Tool combinations we are expert on</span>
            </div>

            <div className="d-flex justify-content-center align-items-center flex-wrap">
                <div className="tool_box shadow mt-5 d-flex flex-column justify-content-center align-items-center">
                    <img src={react} alt="tool" />
                    <span>React</span>
                </div>
                
                <div className="tool_box shadow mt-5 d-flex flex-column justify-content-center align-items-center">
                    <img src={python} alt="tool" />
                    <span>Python</span>
                </div>
                
                <div className="tool_box shadow mt-5 d-flex flex-column justify-content-center align-items-center">
                    <img src={js} alt="tool" />
                    <span>Javascript</span>
                </div>
                
                <div className="tool_box shadow mt-5 d-flex flex-column justify-content-center align-items-center">
                    <img src={docker} alt="tool" />
                    <span>Docker</span>
                </div>
                
                <div className="tool_box shadow mt-5 d-flex flex-column justify-content-center align-items-center">
                    <img src={aws} alt="tool" />
                    <span>AWS</span>
                </div>
                
                <div className="tool_box shadow mt-5 d-flex flex-column justify-content-center align-items-center">
                    <img src={django} alt="tool" />
                    <span>Django</span>
                </div>
                
                <div className="tool_box shadow mt-5 d-flex flex-column justify-content-center align-items-center">
                    <img src={postgre} alt="tool" />
                    <span>PostgreSQL</span>
                </div>
                
                <div className="tool_box shadow mt-5 d-flex flex-column justify-content-center align-items-center">
                    <img src={redis} alt="tool" />
                    <span>Redis</span>
                </div>
            </div>
        </div>
    )
}