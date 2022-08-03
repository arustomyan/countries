import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RestApi from "../../Components/API/RestApi";
import Loader from "../../Components/UI/Loader/Loader";
import darkTheme from "./CountryDetailsDark.module.css";
import whiteTheme from "./CountryDetailsWhite.module.css";
// eslint-disable-next-line import/no-cycle
import MyButton from "../../Components/UI/Button/MyButton";
// eslint-disable-next-line import/no-cycle
import ButtonBack from "../../Components/UI/Button/ButtonBack";
// eslint-disable-next-line import/no-cycle
import { DarkModeContext } from "../../App";

function CountryDetails() {
  const router = useNavigate();

  const [openCard, setOpenCard] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [border, setBorder] = useState([]);
  const params = useParams();

  const darkMode = useContext(DarkModeContext);
  const classes = darkMode ? whiteTheme : darkTheme;

  const fetchCard = () => RestApi.getCard(params.country);

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
          <ButtonBack onClick={() => router(-1)}>Back</ButtonBack>

          <div className={classes.countryDetails}>
            <div className={classes.imgWrappper}>
              <img
                src={openCard.flags.png}
                className={classes.flagCountry}
                alt=""
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
                  <p>Border Countries: </p>
                  {border.map((item) => (
                    <MyButton
                      style={{ height: "40px" }}
                      key={item}
                      onClick={() => router(`/${item}`)}
                    >
                      {item}
                    </MyButton>
                  ))}
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
