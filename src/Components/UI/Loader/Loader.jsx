import React from 'react';
import classes from './Loader.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';


const Loader = () => {
    return (
        <div className={classes.loader}>
        <CircularProgress size={100}/>
      </div>
    );
};

export default Loader;
