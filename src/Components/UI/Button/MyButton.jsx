import React, { useContext } from "react";
import darkTheme from "./MyButtonDarkMode.module.css";
import whiteTheme from "./MyButtonWhiteMode.module.css";
import { DarkModeContext } from "../../../App";

function MyButton({ children, ...props }) {
  const darkMode = useContext(DarkModeContext);
  const classes = darkMode ? whiteTheme : darkTheme;

  return (
    <button {...props} className={classes.btn}>
      {children}
    </button>
  );
}

export default MyButton;
