import React from "react";
import styles from "./ProjectsPage.modules.css";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

// import styles from "./GroupSettingsPage.module.css";

function ProjectsPage() {

      return (
        <>
            <Header />
            <div className="page-container"> {/* Start page-container */}
                <div> {/* Start projectsPage style container */}
                  <h1 className="title-container">Projects</h1>
                    <p>
                      Welcome to my Projects page! 
                      Here, you'll find a selection of my work that showcases my skills and experience in software development. 
                      Each project highlights different technologies and problem-solving approaches I've utilized. 
                      Feel free to explore and reach out if you have any questions or would like to collaborate!
                    </p>
                  </div>  {/* End projectsPage style container */}
            </div> {/* End page-container */} 
            <Footer />
        </>
      );
    };
export default ProjectsPage;