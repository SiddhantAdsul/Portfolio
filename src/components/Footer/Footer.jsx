import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"

const Footer = () => {
    return(
        <>
            <section id="contact" className="footer">
                <h1>Contact</h1>
                <ul>
                    <a href="https://github.com/SiddhantAdsul" target="_blank"><li> <FontAwesomeIcon icon={faGithub} size="2x"/></li></a>
                    <a href="https://www.linkedin.com/in/siddhant-adsule-77867b279/" target="_blank"><li> <FontAwesomeIcon icon={faLinkedin}  size="2x" /></li></a>
                    <a href="https://t.me/SiddhantAdsul" target="_blank"> <li> <FontAwesomeIcon icon={faTelegram} size="2x"/></li></a>
                </ul>
            </section>
        </>
    )
}

export default Footer;