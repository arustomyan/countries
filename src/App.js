import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Header from "./Components/Header/Header";
import HomePage from "./Page/HomePage/HomePage";
import DarkModeContext from "./context/context";

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
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </DarkModeContext.Provider>
  );
}

export default App;
