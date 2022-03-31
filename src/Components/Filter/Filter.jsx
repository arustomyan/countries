import React from 'react';
import MyInput from '../UI/Input/MyInput'
import MySelect from '../UI/Select/MySelect'
import classes from './Filter.module.css'

const Filter = () => {
    return (
        <div className={classes.filterContainer}>
            <MyInput placeholder={'Search for a country…'} />
            <MySelect />
        </div>
    );
}

export default Filter;
