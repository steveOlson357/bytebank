import React from "react";
import styles from "./ProjectsPage.module.css";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

// import styles from "./GroupSettingsPage.module.css";

function ProjectsPage() {

      return (
        <>
            <Header />
            <div className={styles.container} id="page-container"> 

            </div> {/* End page-container */} 
            <Footer />
        </>
      );
    };
export default ProjectsPage;