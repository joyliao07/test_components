import React from 'react';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
    <div>
        <h3>Joyce Liao</h3>
        <p>Software Developer</p>
        <ul className={classes.NavigationItems}>
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








