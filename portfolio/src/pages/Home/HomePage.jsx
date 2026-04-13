import React from "react";
import styles from "./HomePage.modules.css";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import ProfilePic from "../../shared/Images/ProfilePicCropped.png";

// import styles from "./GroupSettingsPage.module.css";

function HomePage() {

      return (
        <>
        <Header />
        <div className="profile-image">
            <img 
                src={ProfilePic} 
                alt="Me changing computer components."
                className='rounded mx-auto d-block profile-image'
                
            />
        </div>
        <div className="title-container">
            <h1>Welcome to the ByteBank!</h1>
            <p>This is where I'm building out a dynamic and interactive portfolio!</p>
        </div>
        <div className="page-container">
            <div>
                <h2> Certified Software Developer </h2>
                <ul>
                    <div>
                        <li className="btn btn-dark">   
                            <h6>Full Stack Development:</h6>  UI/UX | Request Handling | Database and server management
                        </li>
                    </div>
                    <div>
                        <li className="btn btn-dark">   
                            <h6>Front-End Development:</h6> HTML, CSS, JS, React
                        </li>
                    </div>
                    <div>
                        <li className="btn btn-dark">
                            <h6>Mobile Development:</h6>  Android, Kotlin, Swift
                        </li>
                    </div>
                    <div>
                        <li className="btn btn-dark">
                            <h6>PHP Development:</h6>  Laravel | Node.js | SQL | NoSQL | SQLite | MongoDB
                        </li>
                    </div>
                    
                </ul>
                <div className="row justify-content-center">
                    <h2 className="col-6">IT Administration</h2>
                </div>
                <ul>
                    <div>
                        <li className="btn btn-dark">
                        <h6>Domain Management:</h6>  DNS | CPanel | GoDaddy | WHM
                        </li>
                    </div>
                    <div>
                        <li className="btn btn-dark">
                            <h6>Customer Service:</h6>  Yeah, I'm a people person!
                        </li>
                    </div>
                    <div>
                        <li className="btn btn-dark">
                            <h6>Sys Admin:</h6>  Google Workspace | Azure | Entra | Licensing | Local Users | Domain Users           
                        </li>
                    </div>
                    <div className="row justify-content-center">
                        <li className="btn btn-dark col-7" >
                            <h6>About Me:</h6> 
                                With a background spanning retail, construction, industrial maintenance, IT, and tellecommunications, the experience and soft skills that I bring to my team 
                                elevate the entire group. My drive to learn and love of teaching combine with a wide pool of interests, allowing me to easily collaborate with any personality! 
                        </li>
                    </div>
                    <div>
                        <li>
                            <h6>Contact:</h6> 
                            PH: +1 (208) 290 - 0604
                            <br/>E: steve.olson357 [at] gmail [dot] com
                        </li>
                    </div>
                </ul>
                <div>
                    <p>
                        "Free your mind... and your ass will follow." - George Clinton 
                    </p>
                </div>

                

            </div>
            <div>
                {/**Next Element Here */}
            </div>


        </div> {/**Page Container div */}
        <Footer />
        </>
      );
    };
export default HomePage;