import { useContext } from "react";
import darkTheme from "./MyInputDarkMode.module.css";
import whiteTheme from "./MyInputWhiteMode.module.css";
import DarkModeContext from "../../../context/context";

function MyInput({ value, type, onChange, placeholder }) {
  const darkMode = useContext(DarkModeContext);
  const classes = darkMode ? whiteTheme : darkTheme;

  return (
    <input
      className={classes.search}
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default MyInput;
