import React, {useState, useEffect} from 'react';
import Card from '../../Components/Card/Card.jsx';
import Loader from '../../Components/Loader/Loader.jsx';
import classes from './Cards.module.css';
import PostService from '../../Components/API/ApiCom.jsx';
import { useFetching } from './../../Components/Hooks/useFetching';
import {useCountry} from './../../Components/Hooks/useCountry.js';
import Filter from '../../Components/Filter/Filter.jsx';
import CardList from '../../Components/CardList.jsx';
import {useSelect} from './../../Components/Hooks/useCountry.js'


let i = 1

const Cards = () => {

  const [arrConries, setArrContries] = useState([])
  const [filter, setFilter] = useState({query: '', select: ''})

  const searchedCoutry = useCountry(arrConries, filter.select, filter.query)

  const [fetchCounties, isLoading] = useFetching(async () =>{
    const responce = await PostService.getAll();
    setArrContries(responce)
  })
 
  useEffect(() => {
    fetchCounties()
  }, [])
    
  return (
    <div>
      
      <Filter
        filter={filter} 
        setFilter={setFilter}
      />        
        {isLoading ?
            <Loader/>
          : <CardList countries={searchedCoutry}/>}
    </div>
  )
}

export default Cards;