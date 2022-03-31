import React from 'react';
import './styles/App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Filter from './Components/Filter/Filter';
import AppRouter from './Components/AppRouter';

function App() {

  return (
    <BrowserRouter>
        <Header/>
        <Filter />
        <AppRouter />
    </BrowserRouter>
  );
}

export default App;
