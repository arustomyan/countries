import React from 'react';
import moonImg from '../../Images/blackMoon.png';
import classes from "./Header.module.css"

const Header = () => {
    return (

            
            <nav className={classes.navBar}>
                <h1 className={classes.logo}>Where in the world?</h1>
            
                <button onClick={() => {}} className={classes.navBtn}>
                    <img src={moonImg} style={{paddingRight: '8px', width: '15%'}} alt="sunOrMoon" />
                    Dark Mode
                </button>
            </nav>
    
    );
}

export default Header;
