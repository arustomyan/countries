import React, {useState, useEffect, useContext} from 'react'
import RestApi from '../../Components/API/RestApi.jsx'
import Loader from '../../Components/UI/Loader/Loader';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import darkTheme from './CountryDetailsDark.module.css'
import whiteTheme from './CountryDetailsWhite.module.css'
import MyButton from '../../Components/UI/Button/MyButton'
import ButtonBack from '../../Components/UI/Button/ButtonBack';
import { DarkModeContext } from '../../App';


const CountryDetails = ({}) => {

    const router = useNavigate()

    const [openCard, setOpencard] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [border, setBorder] = useState([])
    const params = useParams()

    const darkMode = useContext(DarkModeContext)
    const classes = darkMode ? whiteTheme : darkTheme

    async function fetchCard() {
        const responce = await RestApi.getCard(params.country);
        setOpencard(responce[0])
        setBorder(responce[0].borders)
        setIsLoading(true)
    }

    useEffect(() => {
        fetchCard()
    }, [params]);

  return (
    <div className={classes.page}>
        {!isLoading ?
            <Loader/>                
        : 
        <div className={classes.countryPage}>

            <ButtonBack onClick={() => router(-1)}>
                Back
            </ButtonBack>

            <div className={classes.countryDetails}>
            <div className={classes.imgWrappper}>
                <img src={openCard.flags.png} className={classes.flagCountry} alt="" />
            </div>

            <div className={classes.countryInfoContainer}>
                <h2 className={classes.countryName}>{openCard.name.common}</h2>
                
                <div className={classes.countryInfo}>
                    <p>Native Name: {true && <span>{Object.values(Object.values(openCard.name.nativeName)[0]).join(', ')}</span>}</p>
                    <p>Population: {true && <span>{openCard.population}</span>}</p>
                    <p>Region: {true && <span>{openCard.region}</span>}</p>
                    <p>Sub Region: {true && <span>{openCard.subregion}</span>}</p>
                    <p>Capital: {true && <span>{openCard.capital}</span>}</p>
                    <p>Top Level Domain: {true && <span>{Object.values(openCard.tld)[0]}</span>}</p>
                    <p>Currencies: {true && <span>{Object.values(openCard.currencies)[0].name}</span>}</p>
                   <p>Languages: {true && <span>{Object.values(openCard.languages).join(', ')}</span>}</p>
                </div>

                {border && 
                <div className={classes.countryBorder}>
                    <p>Border Countries: </p>
                    {border.map(item => 
                        <MyButton 
                            style={{height: '40px'}} 
                            key={item}
                            onClick={() => router(`/${item}`)}
                        >{item}</MyButton>
                    )}
                </div>}
            </div>
            </div>
        </div>}
    </div>
  )
}

export default CountryDetails