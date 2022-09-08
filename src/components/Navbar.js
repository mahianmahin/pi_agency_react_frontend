import Logo from "../assets/Logo.svg";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar_main container d-flex justify-content-between align-items-center">
            <img src={Logo} alt="logo" />

            <div className="navbar_links">
                <a href="#services">Service</a>
                <a href="#projects">Projects</a>
                <a href="#team">Team</a>
                <a className="contact_btn" href="#contact">Contact Us</a>
            </div>
        </div>
    )
}