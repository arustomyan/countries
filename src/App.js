import React from "react";
import "./styles/App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import { useState } from "react";

export const DarkModeContext = React.createContext({});

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = () => {
    setDarkMode((prev) => !prev);
    document.querySelector("body").classList.toggle("darkBody");
  };

  return (
    <DarkModeContext.Provider value={darkMode}>
      <BrowserRouter>
        <Header theme={theme} />
        <AppRouter />
      </BrowserRouter>
    </DarkModeContext.Provider>
  );
}

export default App;
