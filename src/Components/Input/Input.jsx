import React from 'react';
import classes from './Input.module.css';

const Input = () => {
    return (
        <input type={'text'} className={classes.search} placeholder="Search for a country…"></input>
    );
}

export default Input;
