import "./Skills.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Skills = ({ label, myList, className}) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    

    return(
        <>
            <div className={`skills ${className}`} onClick={toggleDropdown}>
                <h2>{label}</h2>
                <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown}/>
                <ul className={isOpen ? "show" : ""}>
                    {myList.map((myList, index)=>(
                        <li key={index}>{myList}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Skills;