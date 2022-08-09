import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CountriesApi from "../../Components/API/CountriesApi";
import Loader from "../../Components/UI/Loader/Loader";
import darkTheme from "./CountryDetailsDark.module.css";
import whiteTheme from "./CountryDetailsWhite.module.css";
import LinkButton from "../../Components/UI/Button/LinkButton";
import DarkModeContext from "../../context/context";

const openCardInit = {
  flags: { png: false },
  name: { common: false, nativeName: false },
  population: false,
  region: false,
  subregion: false,
  capital: false,
  tld: false,
  currencies: false,
  borders: false,
};

const backArrow = (
  <svg focusable="false" width="51" height="13" viewBox="0 1 19 12">
    <path d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z" />
  </svg>
);

function CountryDetails() {
  const [openCard, setOpenCard] = useState(openCardInit);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  const darkMode = useContext(DarkModeContext);
  const classes = darkMode ? whiteTheme : darkTheme;

  const fetchCard = () => CountriesApi.getCard(params.country);

  useEffect(() => {
    setIsLoading(false);

    fetchCard().then((res) => {
      setOpenCard(res);
      setIsLoading(true);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const {
    flags: { png: img },
    name: { common: name, nativeName },
    population,
    region,
    subregion,
    capital,
    tld: domains,
    currencies,
    languages,
    borders,
  } = openCard;

  return (
    <div className={classes.page}>
      {!isLoading ? (
        <Loader />
      ) : (
        <>
          <LinkButton link={-1}>
            {backArrow}
            Back
          </LinkButton>

          <section className={classes.countryDetails}>
            <article className={classes.imgWrapper}>
              <img
                src={img}
                className={classes.flagCountry}
                alt={`Flag of ${name}`}
              />
            </article>

            <article className={classes.countryInfoContainer}>
              <h2 className={classes.countryName}>{name}</h2>

              <ul className={classes.countryInfo}>
                <InfoCountry
                  name="Native Name: "
                  value={Object.values(Object.values(nativeName)[0]).join(", ")}
                />
                <InfoCountry name="Population: " value={population} />
                <InfoCountry name="Region: " value={region} />
                <InfoCountry name="Sub Region: " value={subregion} />
                <InfoCountry name="Capital: " value={capital} />
                <InfoCountry name="Currencies: " value={currencies.name} />
                <InfoCountry
                  name="Top Level Domain: "
                  value={domains.join(", ")}
                />
                <InfoCountry
                  name="Languages: "
                  value={Object.values(languages).join(", ")}
                />
              </ul>

              {Boolean(borders.length) && (
                <div className={classes.countryBorder}>
                  <h3>Border Countries: </h3>
                  <ul>
                    {borders.map((item) => (
                      <li key={item}>
                        <LinkButton link={`/${item}`}>{item}</LinkButton>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          </section>
        </>
      )}
    </div>
  );
}

function InfoCountry({ name, value }) {
  if (!value) return null;

  return (
    <li>
      <h3>{name}</h3>
      <span>{value}</span>
    </li>
  );
}

export default CountryDetails;
