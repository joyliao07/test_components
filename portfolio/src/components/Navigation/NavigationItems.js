import React from 'react';
import classes from './NavigationItems.css';
import { classExpression } from '@babel/types';
import 'font-awesome/css/font-awesome.min.css';

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
        <i className="fa fa-github" aria-hidden="true"></i>
        {/* https://scotch.io/tutorials/using-font-awesome-5-with-react */}
    </div>
);

export default navigationItems;








