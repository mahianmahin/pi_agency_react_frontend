import sample from "../assets/sample.png";
import "../styles/Projects.css";

export default function Projects() {
    return (
        <div className="container-fluid projects_background mt-5 py-5" id="projects">
            <div className="projects_main container-fluid">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <span className="section_heading text-white">Our Projects</span>
                    <span className="section_desc text-white">Projects we have done with our clients</span>
                </div>

                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    
                    <div className="project_box d-flex flex-column">
                        <img src={sample} alt="sample" />
                        <span className="project_heading">Name of project</span>
                        <span className="project_desc">This is a landing page of our own agency project built by us. This project shows the extraordinary skill of our front end developer. It’s been built using JavaScript.</span>
                        <a href="#">Take a look</a>
                    </div>
                    
                    <div className="project_box d-flex flex-column">
                        <img src={sample} alt="sample" />
                        <span className="project_heading">Name of project</span>
                        <span className="project_desc">This is a landing page of our own agency project built by us. This project shows the extraordinary skill of our front end developer. It’s been built using JavaScript.</span>
                        <a href="#">Take a look</a>
                    </div>
                    
                    <div className="project_box d-flex flex-column">
                        <img src={sample} alt="sample" />
                        <span className="project_heading">Name of project</span>
                        <span className="project_desc">This is a landing page of our own agency project built by us. This project shows the extraordinary skill of our front end developer. It’s been built using JavaScript.</span>
                        <a href="#">Take a look</a>
                    </div>

                </div>
            </div>
        </div>
    )
}