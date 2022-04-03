import React from 'react'
import classes from '../Page/Cards/Cards.module.css';
import Card from './Card/Card';

function CardList({countries}) {
  return (
    <div className={classes.cardsContainer}>
    {countries.map(country => 
        <Card country={country}/>
    )}
    </div>
  )
}

export default CardList 