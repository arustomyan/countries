import { useContext } from "react";
import darkTheme from "./MyButtonDarkMode.module.css";
import whiteTheme from "./MyButtonWhiteMode.module.css";
import DarkModeContext from "../../../context/context";

// eslint-disable-next-line react/prop-types
function MyButton({ children, onClick }) {
  const darkMode = useContext(DarkModeContext);
  const classes = darkMode ? whiteTheme : darkTheme;

  return (
    <button className={classes.btn} type="button" onClick={onClick}>
      <svg focusable="false" width="51" height="13" viewBox="0 1 19 12">
        <path d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z" />
      </svg>
      {children}
    </button>
  );
}

export default MyButton;
