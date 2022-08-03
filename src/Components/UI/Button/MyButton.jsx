import { useContext } from "react";
import darkTheme from "./MyButtonDarkMode.module.css";
import whiteTheme from "./MyButtonWhiteMode.module.css";
// eslint-disable-next-line import/no-cycle
import { DarkModeContext } from "../../../App";

// eslint-disable-next-line react/prop-types
function MyButton({ children, ...props }) {
  const darkMode = useContext(DarkModeContext);
  const classes = darkMode ? whiteTheme : darkTheme;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button {...props} className={classes.btn} type="button">
      {children}
    </button>
  );
}

export default MyButton;
