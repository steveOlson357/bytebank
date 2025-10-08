import React from "react";
import styles from "./Footer.modules.css";

function Footer() {
    return (
        <>
        <div className="footer-properties">
            <p>
                Contact: <a href="mailto:steve.olson357@gmail.com" >Email</a>
            </p>
            <p>
                Phone: 208.290.0604
            </p>
            <hr />
            <p>&copy; 2025 Ancient Geek</p>
        </div>
        </>
    );
};

export default Footer;