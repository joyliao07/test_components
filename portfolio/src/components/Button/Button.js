import React, {Component} from 'react';
import classes from './Button.css';

class Button extends Component {
    render () {
        return (
            <div>
                <button className={classes.Button}> {this.props.b} </button>
            </div>
        );
    }
}

export default Button;