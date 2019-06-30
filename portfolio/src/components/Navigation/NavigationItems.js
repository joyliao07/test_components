import React from 'react';
import classes from './NavigationItems.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

const navigationItems = (props) => (
    <div className={classes.NavigationItems}>
        <div className={classes.Name}>
            <img src={require("../../assets/head.jpg")}/>
            <h3>Joyce Liao</h3>
            <p>Software Developer</p>
        </div>
        <ul>
            <li><a>Home</a></li>
            <li><a>Python</a></li>
            <li><a>JavaScript</a></li>
            <li><a>Algorithm</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
        </ul>
        <div className={classes.Icons}>
            <IconContext.Provider 
                value={{ size: "1.5em", style: {"margin": "10px"} }}>
                <FaGithub />
                <FaLinkedin />
            </IconContext.Provider>
        </div>

        {/* https://react-icons.netlify.com/#/icons/fa */}
        {/* https://github.com/react-icons/react-icons */}
    </div>
);

export default navigationItems;








