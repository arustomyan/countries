import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './Components/Header/Header';
import Input from './Components/Input/Input';
import Select from './Components/Select/Select';
import Card from './Components/Card/Card';
import { useFetching } from './Components/Hooks/useFetching';
import axios from "axios";
import PostService from './Components/API/ApiCom.jsx'


function App() {

    // const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    //     const response = await PostService.getAll(limit, page)
    // })
    const [arrConries, setArrContries] = useState([])
    
    useEffect(() => {
      const responce = PostService.getAll()
      responce.then(res => setArrContries(res))
      console.log(responce)
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

        <div className='gg'>
          {arrConries.map(country1 => 
            <Card country={country1}/>
          )}

        </div>
    

        <div style={{paddingTop: '200px'}}> 
            fdbf
        </div>

    </div>
  );
}

export default App;
