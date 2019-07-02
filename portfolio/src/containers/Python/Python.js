import React, {Component} from 'react';
import classes from './Python.css';
import NavigationItems from '../../components/Navigation/NavigationItems';

class Button extends Component {
    render () {
        return (
            <div className={classes.Python}>
                <NavigationItems/>
                <div className={classes.PythonContent}>
                    Python Page
                </div>
            </div>
        );
    }
}

export default Button;