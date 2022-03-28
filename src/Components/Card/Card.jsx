import React from 'react';
import classes from "./Card.module.css"

const Card = ({country}) => {
    // console.log(country)

    return (
        <div className={classes.card}>
        <div  className={classes.imgWrapper}>
            <img
            className={classes.cardImage}
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}/>
        </div>
        
        <div className={classes.cardContentWrapper}>
        <p className={classes.cardName}>{country.name.common}</p>
            <div className={classes.cardInfoWrapper}>
                <p className={classes.cardText}>
                    <span className={classes.cardSpan}>Population of: </span>{country.population}
                </p>
                <p className={classes.cardText}>
                    <span className={classes.cardSpan}>Region:  </span>  {country.region}
                </p>
                <p className={classes.cardText}>
                    <span className={classes.cardSpan}>Capital: </span> {!(country.capital === undefined) ? country.capital[0] : 'no capital'}
                </p>
            </div>
        </div>

      </div>
    );
}

export default Card;
