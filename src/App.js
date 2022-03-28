import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './Components/Header/Header';
import Input from './Components/Input/Input';
import Select from './Components/Select/Select';
import Card from './Components/Card/Card';
import { useFetching } from './Components/Hooks/useFetching';
import axios from "axios";
import PostService from './Components/API/ApiCom.jsx'
import Loader from './Components/Loader/Loader.jsx';
import CircularProgress from '@material-ui/core/CircularProgress';



function App() {

    // const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    //     const response = await PostService.getAll(limit, page)
    // })
    const [arrConries, setArrContries] = useState([])
    

    const [fetchCounties, isLoading] = useFetching(async () =>{
      const responce = await PostService.getAll();
      setArrContries(responce)
    })

    useEffect(() => {
      fetchCounties()
    }, [])
    
  return (
    <div>
        <div className='container'>
            <Header/>
        </div>
        <div className='gg'>
            <Input/>
            <Select/>
        </div>

        {isLoading ?
            <div className='loader'>
              <CircularProgress size={100}/>
            </div>
          : <div className='gg'>
            {arrConries.map(country1 => 
                <Card country={country1}/>
            )}
            </div>
          }
          
          

        

    </div>
  );
}

export default App;
