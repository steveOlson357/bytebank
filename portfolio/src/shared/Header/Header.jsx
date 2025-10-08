import React from "react";
import styles from "./Header.modules.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return(
        <>
            <div className="header-name">
                {/* <nav className="navbar navbar-expand">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Steven Olson</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                    <a className="nav-link" href="#">Projects</a>
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}

                <nav className="navbar navbar-expand-lg navbar-dark">    
                  <div className="container-fluid">
                    <a className="navbar-brand" id="title" href="#">Steven Olson</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="https://github.com/steveOlson357/bytebank/tree/main/gameDev">Projects</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="https://steveolson357.github.io/bytebank/#:~:text=with%20any%20personality!-,Contact%3A,-PH%3A%20%2B1%20(208">Contact Me</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
            </div>
        </>
    );
};

export default Header;