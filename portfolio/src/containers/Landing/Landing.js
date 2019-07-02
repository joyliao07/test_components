import React, {Component} from 'react';
import NavigationItems from '../../components/Navigation/NavigationItems';
import classes from './Landing.css';
import Button from '../../components/Button/Button';

class Landing extends Component {
    render () {
        return (
            <div className={classes.Landing}>
                <NavigationItems/>
                <div className={classes.LandingContent}>
                    <h2>Full-stack Software Developer</h2>
                    <p>"It's not a bug. It's an undocumented feature. ~Anonymous </p>
                    <div className={classes.ButtonGroup}>
                        <Button b='Python'/>
                        <Button b='JavaScript'/>
                        <Button b='DSA'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
