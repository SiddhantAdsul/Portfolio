import ProjectCard from "./ProjectCard";

const Projects = () => {
    return(
        <>
            <section id="projects" className="project-con">
                <h1>All my Projects</h1>
                <div className="projects">
                    <ProjectCard
                        title="Pet Store App"
                        technologies="Springboot, MySQL"
                        descriptions={[
                            "Developed a dynamic pet store application using Spring Boot, integrating with a MySQL database.",
                            "Utilised Lombok annotations to simplify boilerplate code and improve efficiency.",
                            "Leveraged JPA Repositories and Spring Data Rest for seamless data handling and API Implementation."
                        ]}
                        icons={[
                             {src: "public/spring-logo.png", alt: "Spring Logo"},
                             {src: "public/mysqlworkbench_93532.webp", alt: "MySQL Workbench Logo"}
                        ]}
                        projectLink={"https://github.com/SiddhantAdsul/PetStoreApp-Spring-Boot-"}
                    />
                    <ProjectCard
                        title="User Registration"
                        technologies="React, Springboot, MySQL"
                        descriptions={[
                            "Developed a user registration website using React for the frontend and Spring Boot with MySQL for the backend.",
                            "Applied comprehensive validation checks for both registration and login to ensure data integrity.",
                            "Utilised JPA Repositories and Spring Data REST for efficient data handling."
                        ]}
                        icons={[{src: "public/React-Icon-Black.png", alt: "React Logo"},
                             {src: "public/spring-logo.png", alt: "Spring Logo"},
                             {src: "public/mysqlworkbench_93532.webp", alt: "MySQL Workbench Logo"}
                        ]}
                    />
                    <ProjectCard
                        title="FoodieHub"
                        technologies="HTML5, CSS3, Javascript "
                        descriptions={[
                            "Designed a visually engaging and user-friendly website prototype on Figma.",
                            "Built the website using HTML and CSS, incorporating responsive design principles for an optimal user  experience.",
                            "Implemented a seamless login-register modal using vanilla JavaScript"
                        ]}
                        icons={[
                             {src: "public/html.png", alt: "HTML5 Logo"},
                             {src: "public/css3.png", alt: "CSS3 Logo"},
                             {src: "public/javascript.png", alt: "Javascript Logo"}
                        ]}
                        projectLink={"https://github.com/SiddhantAdsul/FoodieHub-Food-Website-for-Design-"}
                    />
                    <ProjectCard
                        title="DevStackFull Quiz"
                        technologies="React, Spring Boot, MySQL"
                        descriptions={[
                            "Developed a quiz application allowing topic and quiz creation.",
                            "Used React with Vite for a dynamic frontend",
                            "Designed a robust backend with Spring Boot and MySQL, ensuring efficient data storage and retrieval.",
                            "Enabled quiz-taking functionality with real-time scoring and answer validation."
                        ]}
                        icons={[
                            { src: "public/React-Icon-Black.png", alt: "React Logo" },
                            { src: "public/spring-logo.png", alt: "Spring Boot Logo" },
                            { src: "public/mysqlworkbench_93532.webp", alt: "MySQL Workbench Logo" }
                        ]}
                        projectLink={"https://github.com/SiddhantAdsul/DevStackFull-Quiz-Application-In-Spring-Boot"}
                    />
                    

                    
                </div>
            </section>
        </>
    )
}

export default Projects;