import React from 'react';
import classes from './NavigationItems.css';
import { FaGithub, FaLinkedin, FaHome, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IconContext } from "react-icons";

const navigationItems = (props) => (
    <div className={classes.NavigationItems}>
        <div className={classes.Name}>
            <img src={require("../../assets/head.jpg")}/>
            <h3>Joyce Liao</h3>
            <p>Software Developer</p>
        </div>
        <ul>
            <IconContext.Provider 
                value={{ size: "17px", style: {"margin-left": "15px", "margin-top": "15px"}}}>
                <div>
                    <div className={classes.LiHome}><li><a>Home</a> </li><FaHome/></div>
                </div>
                <div> 
                    <div className={classes.LiPython}><li><a>Python</a></li> <FaPython/> </div>
                </div>
                <li><a>JavaScript <IoLogoJavascript/></a></li>
                <li><a>Algorithm</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </IconContext.Provider>
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








