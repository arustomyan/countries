import React from "react";
import moonImg from "../../Images/blackMoon.png";
import whiteTheme from "./HeaderWhite.module.css";
import darkTheme from "./HeaderDark.module.css";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../App";
import { useContext } from "react";

const Header = ({ theme }) => {
  const darkMode = useContext(DarkModeContext);

  const router = useNavigate();

  const classes = darkMode ? whiteTheme : darkTheme;

  return (
    <div className={classes.container}>
      <nav className={classes.navBar}>
        <button
          onClick={() => {
            router(`/`);
          }}
        >
          <h1 className={classes.logo}>Where in the world?</h1>
        </button>

        <button onClick={theme} className={classes.navBtn}>
          <svg
            width="25"
            height="20"
            viewBox="5 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.5532 13.815C9.66857 13.815 6.51929 10.9278 6.51929 7.36821C6.51929 6.0253 6.96679 4.78158 7.73143 3.75C4.69036 4.69515 2.5 7.33122 2.5 10.4381C2.5 14.3385 5.94929 17.5 10.2036 17.5C13.5929 17.5 16.4696 15.4932 17.5 12.7045C16.375 13.4048 15.0161 13.815 13.5532 13.815Z"
            />
          </svg>
          Dark Mode
        </button>
      </nav>
    </div>
  );
};

export default Header;
