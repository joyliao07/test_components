import React, {Component} from 'react';
import NavigationItems from '../../components/Navigation/NavigationItems';
import classes from './Landing.css';

class Landing extends Component {
    render () {
        return (
            <div className={classes.Landing}>
                This is landing page
                <NavigationItems/>
            </div>
        );
    }
}

export default Landing;
