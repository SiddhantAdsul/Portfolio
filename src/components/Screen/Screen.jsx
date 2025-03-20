import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import Skills from "../Skills/Skills";

const Screen = () => {

    var database = ["SQL", "MySQL", "SSMS", "PostgreSQL"];
    var frontEnd = ["HTML", "CSS", "Javascript", "React", "Angular", "Bootstrap"];
    var backend = ["Java", "Python", "C#", "Javascript", "Springboot", "ASP.NET"];

    return(
        <>
            <div className="gradient-border">
                    <div className="gray-block">
                        <div className="screen">
                            <img src="/public/pexels-photo-91227.jpeg" alt="self=photo" />
                            <Skills className={"frontend"} label="Frontend" myList={frontEnd}/>
                            <Skills className={"backend"} label="Backend" myList={backend}/>
                            <Skills label="Database" myList={database} className={"contact"}/>
                            <div className="search-bar">
                                <FontAwesomeIcon icon={faCircleNotch} spin size="2x" />
                                <p>Showing results for ambitious Fullstack Developers</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Screen;