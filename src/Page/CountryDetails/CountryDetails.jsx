import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CountriesApi from "../../Components/API/CountriesApi";
import Loader from "../../Components/UI/Loader/Loader";
import darkTheme from "./CountryDetailsDark.module.css";
import whiteTheme from "./CountryDetailsWhite.module.css";
import LinkButton from "../../Components/UI/Button/LinkButton";
import DarkModeContext from "../../context/context";

function CountryDetails() {
  const [openCard, setOpenCard] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [border, setBorder] = useState([]);
  const params = useParams();

  const darkMode = useContext(DarkModeContext);
  const classes = darkMode ? whiteTheme : darkTheme;

  const fetchCard = () => CountriesApi.getCard(params.country);

  useEffect(() => {
    fetchCard().then((res) => {
      setOpenCard(res[0]);
      setBorder(res[0].borders);
      setIsLoading(true);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <div className={classes.page}>
      {!isLoading ? (
        <Loader />
      ) : (
        <div className={classes.countryPage}>
          <LinkButton link={-1}>
            <svg focusable="false" width="51" height="13" viewBox="0 1 19 12">
              <path d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z" />
            </svg>
            Back
          </LinkButton>

          <div className={classes.countryDetails}>
            <div className={classes.imgWrapper}>
              <img
                src={openCard.flags.png}
                className={classes.flagCountry}
                alt={`Flag of ${openCard.name.common}`}
              />
            </div>

            <div className={classes.countryInfoContainer}>
              <h2 className={classes.countryName}>{openCard.name.common}</h2>

              <div className={classes.countryInfo}>
                <p>
                  Native Name:{" "}
                  <span>
                    {Object.values(
                      Object.values(openCard.name.nativeName)[0]
                    ).join(", ")}
                  </span>
                </p>
                <p>
                  Population: <span>{openCard.population}</span>
                </p>
                <p>
                  Region: <span>{openCard.region}</span>
                </p>
                <p>
                  Sub Region: <span>{openCard.subregion}</span>
                </p>
                <p>
                  Capital: <span>{openCard.capital}</span>
                </p>
                <p>
                  Top Level Domain:
                  <span>{Object.values(openCard.tld)[0]}</span>
                </p>
                <p>
                  Currencies:
                  <span>{Object.values(openCard.currencies)[0].name}</span>
                </p>
                <p>
                  Languages:{" "}
                  <span>{Object.values(openCard.languages).join(", ")}</span>
                </p>
              </div>

              {border && (
                <div className={classes.countryBorder}>
                  <ul>
                    <p>Border Countries: </p>
                    {border.map((item) => (
                      <li>
                        <LinkButton key={item} link={`/${item}`}>
                          {item}
                        </LinkButton>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
