import React, {Component} from 'react';
import classes from './Python.css';
import NavigationItems from '../../components/Navigation/NavigationItems';

class Button extends Component {
    render () {
        return (
            <div className={classes.Python}>

                <div className={classes.PythonContent}>
                    <h3>Python Projects</h3>
                    <p>I certainly am interested in accessibility, clarity, and immediacy. ~Paul Muldoon</p>
                    <div>
                        <h4>Project 1</h4>
                        <img src={require("../../assets/glitter.jpg")}/>
                        <p> Project description ..........................</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Button;