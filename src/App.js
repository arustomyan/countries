import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Header from "./Components/Header/Header";
import HomePage from "./Page/HomePage/HomePage";
import DarkModeContext from "./context/context";
import CountryDetails from "./Page/CountryDetails/CountryDetails";

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
          <Route path="/:country" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </DarkModeContext.Provider>
  );
}

export default App;
