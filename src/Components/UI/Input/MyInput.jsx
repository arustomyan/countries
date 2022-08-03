import React, { useContext } from "react";
import darkTheme from "./MyInputDarkMode.module.css";
import whiteTheme from "./MyInputWhiteMode.module.css";
// eslint-disable-next-line import/no-cycle
import { DarkModeContext } from "../../../App";

const MyInput = React.forwardRef((props, ref) => {
  const darkMode = useContext(DarkModeContext);
  const classes = darkMode ? whiteTheme : darkTheme;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <input ref={ref} className={classes.search} {...props} />;
});

export default MyInput;
