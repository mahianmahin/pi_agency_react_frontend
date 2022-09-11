import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
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
                        <img src={sample} alt="thumbnail" />
                        <span className="project_heading">Landing Page</span>
                        <span className="project_desc">This is a landing page of our own agency project built by us. This project shows the extraordinary skill of our front end developer. It’s been built using JavaScript.</span>
                        <a href="https://piagency.tech" target="blank">Take a look</a>
                    </div>
                    
                    <div className="project_box d-flex flex-column">
                        <img src={project2} alt="sample" />
                        <span className="project_heading">E-Commerce</span>
                        <span className="project_desc">Foodsubway.com is an e-commerce website. It's been developed using ReactJs in the front end Django REST framework API in the backend side.</span>
                        <a href="https://foodsubway.com" target="blank">Take a look</a>
                    </div>
                    
                    <div className="project_box d-flex flex-column">
                        <img src={project3} alt="sample" />
                        <span className="project_heading">Coffeeshop Project</span>
                        <span className="project_desc">This is a coffee shop website. Anyone can book seats directly in the coffee shop from this website. This project has been built using python Django backend.</span>
                        <a href="http://mariam92.pythonanywhere.com/" target="blank">Take a look</a>
                    </div>

                </div>
            </div>
        </div>
    )
}