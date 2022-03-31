import React, {useState, useEffect} from 'react'
import PostService from '../API/ApiCom.jsx'
// import Loader from './Components/Loader/Loader.jsx';
import Loader from '../Loader/Loader';
import flag from '../../Images/Germany.png'
import { Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BorderCountries from '../BorderCountries/BorderCountries.jsx';

const CountryDetails = ({}) => {

    const router = useNavigate()

    const [openCard, setOpencard] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [border, setBorder] = useState([])
    const params = useParams()

    async function fetchCard(card) {
        const responce = await PostService.getCard(card);
        setOpencard(responce[0])
        setBorder(responce[0].borders)
        console.log(responce[0].borders)
        setIsLoading(true)
    }

    useEffect(() => {
        fetchCard(params.country)
        console.log('Вызван эффект fetchCard')
    }, []);


    function changeCountry(item) {
        fetchCard(item)
        console.log('нажатие')
    }


  return (
    <div>
        {!isLoading ?
            <Loader/>                
        : 
        <div className='countryDetails'>
            <div className='imgWrappper'>
                <img src={openCard.flags.png} className='flagCountry' alt="" />
            </div>
            <div className='countryInfoContainer'>
                <h2 className="countryName">{openCard.name.common}</h2>
                <div className="countryInfo">
                    <p>Native Name: {true && <span>{}</span>}</p>
                    <p>Population: {true && <span>{openCard.population}</span>}</p>
                    <p>Region: {true && <span>{openCard.region}</span>}</p>
                    <p>Sub Region: {true && <span>{openCard.subregion}</span>}</p>
                    <p>Capital: {true && <span>{openCard.capital}</span>}</p>
                    <p>Top Level Domain: {true && <span>{Object.values(openCard.tld)[0]}</span>}</p>
                    <p>Currencies: {true && <span>{Object.values(openCard.currencies)[0].name}</span>}</p>
                   <p>Languages: {true && <span>{Object.values(openCard.languages).join(', ')}</span>}</p>
                </div>
{                border && <div className='countryBorder'>
                    <p>Border Countries: </p>
                    {border.map(item => 
                        <button onClick={() => {
                            changeCountry(item);
                            router(`/${item}`)
                        }}>{item}</button>
                    )}
                </div>}
            </div>
        </div>}
    </div>
  )
}

export default CountryDetails