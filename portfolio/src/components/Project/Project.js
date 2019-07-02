import React, {Component} from 'react';
import classes from './Project.css';

class Project extends Component {
    render () {
        return (
            <div className={classes.Project}>
                <h4>{this.props.name}</h4>
                <p> {this.props.description}</p>
            </div>
        );
    }
}

export default Project;