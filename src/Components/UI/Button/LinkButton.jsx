import { useContext } from "react";
import { Link } from "react-router-dom";
import darkTheme from "./MyButtonDarkMode.module.css";
import whiteTheme from "./MyButtonWhiteMode.module.css";
import DarkModeContext from "../../../context/context";

function LinkButton({ children, link }) {
  const darkMode = useContext(DarkModeContext);
  const classes = darkMode ? whiteTheme : darkTheme;

  return (
    <Link className={classes.btn} to={link}>
      {children}
    </Link>
  );
}

export default LinkButton;
