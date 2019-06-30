import React from 'react';
import classes from './NavigationItems.css';
import { FaGithub, FaLinkedin, FaHome, FaPython, FaRegLightbulb, FaCommentDots } from "react-icons/fa";
import { IoLogoJavascript, IoMdContact } from "react-icons/io";
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
                value={{ size: "17px", style: {"margin-left": "18px", "margin-top": "15px"}}}>
                <div>
                    <div className={classes.LiHome}><li><a>Home</a> </li><FaHome/></div>
                </div>
                <div> 
                    <div className={classes.LiPython}><li><a>Python</a></li> <FaPython/> </div>
                </div>
                <div> 
                    <div className={classes.LiJS}><li><a>JavaScript</a></li> <IoLogoJavascript/> </div>
                </div>
                <div> 
                    <div className={classes.LiAlgorithm}><li><a>Algorithm</a></li> <FaRegLightbulb/> </div>
                </div>
                <div> 
                    <div className={classes.LiAbout}><li><a>About Me</a></li> <FaCommentDots/> </div>
                </div>
                <div> 
                    <div className={classes.LiContact}><li><a>Contact</a></li> <IoMdContact/> </div>
                </div>

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








