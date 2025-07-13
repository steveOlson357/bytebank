import React from "react";
import styles from "./HomePage.modules.css";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import ProfilePic from "../../shared/Images/ProfilePic.png";

// import styles from "./GroupSettingsPage.module.css";

function HomePage() {

      return (
        <>
        <Header />
        <div className="profile-image-container">
            <img 
                src={ProfilePic} 
                alt="Picture of me hot-swapping components."
                className="profile-image"
            />
        </div>
        <div className="page-container">
            <div>
                <h2> Structure and Navigation: </h2>
                <ul>
                    <li>   
                        Clear Hierarchy - simple intuitive navigation
                    </li>
                    <li>
                        Responsive, Mobile-friendly design
                    </li>
                    <li>
                        Strategic use of whitespace
                    </li>
                    <li>
                        Consistent branding, keep look and feel same
                    </li>
                </ul>
                <h2>Content and Visuals</h2>
                <ul>
                    <li>
                        Hero section: first thing seen, engaging and informative
                    </li>
                    <li>
                        include compelling headline, brief intro, high quality image or video. 
                    </li>
                    <li>
                        Portfolio projects                      
                    </li>
                    <li>
                        About Me
                    </li>
                    <li>
                        Call to action. Guide to next step
                    </li>
                    <li>
                        Personal Branding. personality and style. interests and passions should be reflected in work
                    </li>
                </ul>

            </div>
        </div>
        <Footer />
        </>
      );
    };
export default HomePage;