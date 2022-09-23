import avatar from "../assets/avatar1.png";
import babor from "../assets/babor.png";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import jamil from "../assets/jamil.png";
import linkedin from "../assets/linkedin.svg";
import sabbir from "../assets/sabbir.jpg";
import sakib from "../assets/sakib.jpg";
import "../styles/Team.css";

export default function Team() {
    return (
        <div className="container team_main" id="team">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <span className="section_heading mt-5">Technical Team</span>
                <span className="section_desc">We take pride in the people we work with</span>
            </div>

            <div className="d-flex flex-wrap justify-content-center align-items-center">
                <div className="team_box mt-5 shadow d-flex flex-column justify-content-center align-items-start">
                    <img src={avatar} alt="avatar" />
                    <span className="team_title">Mahian Mahin</span>
                    <span className="team_designation">Lead Software Developer</span>
                    <span className="team_decs">Mahin is currently leading the technical team of Pi-Agency. He is a skilled software developer and a hard working individual. He is great at building algorithms and solving problems</span>

                    <div className="d-flex icons">
                        <a href="https://web.facebook.com/mahin1319/" target="blank"><img src={facebook} alt="icon" /></a>
                        <a href="https://www.linkedin.com/in/mahin1302/" target="blank"><img src={linkedin} alt="icon" /></a>
                        <a href="https://github.com/mahianmahin/" target="blank"><img src={github} alt="icon" /></a>
                    </div>
                </div>
                
                <div className="team_box mt-5 shadow d-flex flex-column justify-content-center align-items-start">
                    <img src={babor} alt="avatar" />
                    <span className="team_title">Babor Islam</span>
                    <span className="team_designation">Software Developer</span>
                    <span className="team_decs">Babor, an extraordinary skilled and talented programmer and problem solver who is working with us with a great dedication. He has solved several challenging problems in our projects.</span>

                    <div className="d-flex icons">
                        <a href="https://www.facebook.com/baborislam1995" target="blank"><img src={facebook} alt="icon" /></a>
                        <a href="https://www.linkedin.com/in/babor-islam-ba8454193/" target="blank"><img src={linkedin} alt="icon" /></a>
                        <a href="https://github.com/babor99" target="blank"><img src={github} alt="icon" /></a>
                    </div>
                </div>
                
                <div className="team_box mt-5 shadow d-flex flex-column justify-content-center align-items-start">
                    <img src={sakib} alt="avatar" />
                    <span className="team_title">Kazi Tanvirul Islam Sakib</span>
                    <span className="team_designation">Software Developer</span>
                    <span className="team_decs">Sakib is a dedicated genius and a great problem solver. He is really good at core programming concepts and web development. He is currently working as a software developer in the team</span>

                    <div className="d-flex icons">
                        <a href="https://web.facebook.com/kti.sakib" target="blank"><img src={facebook} alt="icon" /></a>
                        <a href="https://www.linkedin.com/in/kti-sakib-b68141202/" target="blank"><img src={linkedin} alt="icon" /></a>
                        <a href="https://github.com/ktisakib" target="blank"><img src={github} alt="icon" /></a>
                    </div>
                </div>
                
                <div className="team_box mt-5 shadow d-flex flex-column justify-content-center align-items-start">
                    <img src={jamil} alt="avatar" />
                    <span className="team_title">Safayet Jamil Sovon</span>
                    <span className="team_designation">Site Reliability Engineer</span>
                    <span className="team_decs">Safayet, an extremely talented Site Reliability Engineer who is working with us from the very beginning. He is responsible for handling the DevOps section of our clients.</span>

                    <div className="d-flex icons">
                        <a href="https://www.facebook.com/sovon.jami/" target="blank"><img src={facebook} alt="icon" /></a>
                        <a href="#" target="blank"><img src={linkedin} alt="icon" /></a>
                        <a href="https://github.com/safayetjamil647" target="blank"><img src={github} alt="icon" /></a>
                    </div>
                </div>
                
                <div className="team_box mt-5 shadow d-flex flex-column justify-content-center align-items-start">
                    <img src={sabbir} alt="avatar" />
                    <span className="team_title">Sabbir Ahmed</span>
                    <span className="team_designation">Ui/Ux Designer</span>
                    <span className="team_decs">Sabbir is a talented Ui/Ux designer. He has great sense of Ui designs as well as user experience. He handles any product from the ground up to the prior development phase.</span>

                    <div className="d-flex icons">
                        <a href="https://www.linkedin.com/in/sbahamed38/" target="blank"><img src={linkedin} alt="icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}