import React, {Component} from 'react';
import classes from './Python.css';
import Project from '../../components/Project/Project';

class Button extends Component {
    render () {
        return (
            <div className={classes.Python}>

                <div className={classes.PythonContent}>
                    <h3>Python Projects</h3>
                    <p>I certainly am interested in accessibility, clarity, and immediacy. ~Paul Muldoon</p>
                    <div>
                        <img src={require("../../assets/glitter.jpg")}/>
                        <Project
                            name="Project 1"
                            description="Project 1 description ............................."/>
                    </div>
                    <div>
                        <img src={require("../../assets/glitter.jpg")}/>
                        <Project
                            name="Project 2"
                            description="Project 2 description ............................."/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Button;