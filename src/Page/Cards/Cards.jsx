import React, {useState, useEffect} from 'react';
import Card from '../../Components/Card/Card.jsx';
import Loader from '../../Components/Loader/Loader.jsx';
import classes from './Cards.module.css';
import PostService from '../../Components/API/ApiCom.jsx';
import { useFetching } from './../../Components/Hooks/useFetching';


const Cards = () => {

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
        {isLoading ?
            <Loader/>
          : <div className={classes.cardsContainer}>
            {arrConries.map(country1 => 
                <Card country={country1}/>
            )}
            </div>
          }
    </div>
  )
}

export default Cards;