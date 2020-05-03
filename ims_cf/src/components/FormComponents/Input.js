import React from 'react';
import classes from './Input.module.css';

const Input = props => {
    // console.log(props.value);
    return (
        <div className={classes.Inline}>
            <div>
            <label for={props.name}>
                {props.title}
            </label>
            </div>
            <div className={classes.Input}>
            <input 
                id={props.name}
                name={props.name}
                type={props.inputType}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                {...props}
            />
            </div>
        </div>
    );
};

export default Input;