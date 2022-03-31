import React from 'react';
import classes from './MyInput.module.css';

const MyInput = ({placeholder}) => {
    return (
        <input type={'text'} className={classes.search} placeholder={placeholder}></input>
    );
}

export default MyInput;
