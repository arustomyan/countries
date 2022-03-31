import React from 'react';
import moonImg from '../../Images/blackMoon.png';
import classes from "./Header.module.css"
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const router = useNavigate()


    return (

        <div className={classes.container}>
            <nav className={classes.navBar}>
                <button onClick={() => {router(`/`)}}><h1 className={classes.logo}>Where in the world?</h1></button>
            
                <button onClick={() => {}} className={classes.navBtn}>
                    <img src={moonImg} style={{paddingRight: '8px', width: '15%'}} alt="sunOrMoon" />
                    Dark Mode
                </button>
            </nav>
        </div>    


    );
}

export default Header;
