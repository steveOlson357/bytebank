import React from "react";
import styles from "./ProjectsPage.modules.css";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

import projects from "../../data/projects";

// Generic, reusable video component that accepts a `src` variable.
function VideoPlayer({ src, width = 600, controls = true, ...props }) {
  if (!src) return null;
  return (
    <video width={width} controls={controls} {...props}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="page-container"> {/* Start page-container */}
        <div> {/* Start projectsPage style container */}
          <h1 className="title-container">Projects</h1>
          <p className="color-dark">
            Welcome to my Projects page! 
            Here, you'll find a selection of my work that showcases my skills and experience in software development. 
            Each project highlights different technologies and problem-solving approaches I've utilized. 
            <br/>
            This list of projects is not all-inclusive and I hope to add more in the future. They do demonstrate ability to learn new skills and technologies. 
            <br />
            <br />
            This website itself is a React project built with modern web development practices and hosted on GitHub Pages.
            In particular, this page utilizes JSON objects for the project data and a reusable VideoPlayer component for displaying project videos.
            <br/>
            Feel free to explore and reach out if you have any questions or would like to collaborate!
          </p>
          <hr />

          {/* Render projects from external data file (src/data/projects.js). */}
          {projects.map((p) => (
            <div className="project-item" key={p.id}>
              <h2 className="project-title">{p.title}</h2>
              <p className="project-description">
                
                <br />
                {p.videoSrc && (
                  <>
                    <div className="video-container">
                      <VideoPlayer src={p.videoSrc} autoPlay muted loop />
                      
                      <div className="project-description color-dark">
                        {p.description}
                      </div>

                      <div className="project-tech-stack color-dark">
                        <strong>Tech Stack:</strong> {p.tech}
                      </div>

                    </div>
                    {/* <div className="project-description color-dark collapse-on-mobile">
                      {p.description}
                    </div>
                    <p className="project-tech-stack color-dark">
                      <strong>Tech Stack:</strong> {p.tech}
                    </p> */}
                  </>
                )}
 
              </p>

              
            </div>
          ))}
        </div>  {/* End projectsPage style container */}
      </div> {/* End page-container */} 
      <Footer />
    </>
  );
}

export default ProjectsPage;