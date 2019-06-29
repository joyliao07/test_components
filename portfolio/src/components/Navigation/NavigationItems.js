import React from 'react';
import classes from './NavigationItems.css';
import { classExpression } from '@babel/types';

const navigationItems = (props) => (
    <div className={classes.NavigationItems}>
        <div>
            <img className={classes.Head} src={require("../../assets/head.jpg")}/>
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
    </div>
);

export default navigationItems;








