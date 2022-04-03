import React from 'react';
import './styles/App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Filter from './Components/Filter/Filter';
import AppRouter from './Components/AppRouter';
import axios from 'axios';
import { useState } from 'react';
import { Button } from '@material-ui/core';

function App() {

  const [res, setRes] = useState({})

async function name() {
  const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,region,population,cca3')
  setRes(response.data)
}

  return (
    <BrowserRouter>
        <Button onClick={name}>запрос</Button>
        <Button onClick={() => console.log(res)} >ответ</Button>
        <Header/>
        <AppRouter />
    </BrowserRouter>
  );
}

export default App;
