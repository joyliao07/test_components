import React, {Component} from 'react';
import NavigationItems from '../../components/Navigation/NavigationItems';
import classes from './Landing.css';

class Landing extends Component {
    render () {
        return (
            <div className={classes.Landing}>
                <NavigationItems/>
                <div className={classes.LandingContent}>
                    <p>landing content</p>
                </div>
            </div>
        );
    }
}

export default Landing;
