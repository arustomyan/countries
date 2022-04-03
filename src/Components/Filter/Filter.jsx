import React from 'react';
import MyInput from '../UI/Input/MyInput'
import MySelect from '../UI/Select/MySelect'
import classes from './Filter.module.css'
import { Button } from '@material-ui/core';

const Filter = ({filter, setFilter}) => {
    return (
        <div className={classes.filterContainer}>
            <MyInput 
                type={'text'}
                placeholder={'Search for a country…'} 
                value={filter.query}
                onChange={(e) => {setFilter({...filter, query: e.target.value})}}
            />
            <MySelect
                value={filter.select}
                onChange={selected => setFilter({...filter, select: selected})}
                defaultValue="Select region"
                option={[
                    {value: 'Africa', name: 'Africa'},
                    {value: 'Europe', name: 'Europe'},
                    {value: 'Americas', name: 'Americas'},
                    {value: 'Asia', name: 'Asia'},
                    {value: 'Oceania', name: 'Oceania'},
                    {value: '', name: 'All'},
                ]}
            />
        </div>
    );
}

export default Filter;
