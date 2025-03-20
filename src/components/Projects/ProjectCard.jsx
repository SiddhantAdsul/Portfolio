import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectCard.css"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ title, technologies, descriptions, icons, projectLink}) =>{
    return(
        <>
            <div className="project-card">
                <h3>{title}</h3>
                <p>{technologies}</p>
                <ul>
                    {descriptions.map((desc, index)=>(
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
                    <div className="card-footer">
                        <div className="icons">
                            {icons.map((icon, index)=>(
                                <img key={index} src={icon.src} alt={icon.alt} width={48} />
                            ))}
                        </div>
                        <a href={projectLink} target="_blank">Know more <FontAwesomeIcon icon={faCaretRight}/></a>
                    </div>
                    
                
            </div>
        </>
    )
}

export default ProjectCard;