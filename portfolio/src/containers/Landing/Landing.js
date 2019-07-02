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
                    <p>"What's important is that you have a faith in people, that
they are basically good and smart, and if you give them tools
they'll do wonderful things with them." ~Steve Jobs </p>
                    <Button b='Python Portfolio'/>
                    <Button b='JavaScript Portfolio'/>
                </div>
            </div>
        );
    }
}

export default Landing;
