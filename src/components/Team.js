import avatar from "../assets/avatar1.png";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
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
                        <a href="#" target="_blank"><img src={facebook} alt="icon" /></a>
                        <a href="#" target="_blank"><img src={linkedin} alt="icon" /></a>
                        <a href="#" target="_blank"><img src={github} alt="icon" /></a>
                    </div>
                </div>
                
                <div className="team_box mt-5 shadow d-flex flex-column justify-content-center align-items-start">
                    <img src={avatar} alt="avatar" />
                    <span className="team_title">Mahian Mahin</span>
                    <span className="team_designation">Lead Software Developer</span>
                    <span className="team_decs">Mahin is currently leading the technical team of Pi-Agency. He is a skilled software developer and a hard working individual. He is great at building algorithms and solving problems</span>

                    <div className="d-flex icons">
                        <img src={facebook} alt="icon" />
                        <img src={linkedin} alt="icon" />
                        <img src={github} alt="icon" />
                    </div>
                </div>
                
                <div className="team_box mt-5 shadow d-flex flex-column justify-content-center align-items-start">
                    <img src={avatar} alt="avatar" />
                    <span className="team_title">Mahian Mahin</span>
                    <span className="team_designation">Lead Software Developer</span>
                    <span className="team_decs">Mahin is currently leading the technical team of Pi-Agency. He is a skilled software developer and a hard working individual. He is great at building algorithms and solving problems</span>

                    <div className="d-flex icons">
                        <img src={facebook} alt="icon" />
                        <img src={linkedin} alt="icon" />
                        <img src={github} alt="icon" />
                    </div>
                </div>
                
                <div className="team_box mt-5 shadow d-flex flex-column justify-content-center align-items-start">
                    <img src={avatar} alt="avatar" />
                    <span className="team_title">Mahian Mahin</span>
                    <span className="team_designation">Lead Software Developer</span>
                    <span className="team_decs">Mahin is currently leading the technical team of Pi-Agency. He is a skilled software developer and a hard working individual. He is great at building algorithms and solving problems</span>

                    <div className="d-flex icons">
                        <img src={facebook} alt="icon" />
                        <img src={linkedin} alt="icon" />
                        <img src={github} alt="icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}