import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./CardWhite.module.css";
import DarkModeContext from "../../context/context";

function Card({ country }) {
  const darMode = useContext(DarkModeContext);
  const classes1 = darMode
    ? { backgroundColor: "#fff" }
    : { backgroundColor: "#2B3844" };

  const router = useNavigate();

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-element-interactions
    <li
      className={classes.card}
      style={classes1}
      onClick={() => router(`/${country.cca3}`)}
    >
      <div className={classes.imgWrapper}>
        <img
          className={classes.cardImage}
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
        />
      </div>

      <div className={classes.cardContentWrapper}>
        <p className={classes.cardName}>{country.name.common}</p>
        <div className={classes.cardInfoWrapper}>
          <p className={classes.cardText}>
            <span className={classes.cardSpan}>Population of: </span>
            {country.population}
          </p>
          <p className={classes.cardText}>
            <span className={classes.cardSpan}>Region: </span> {country.region}
          </p>
          <p className={classes.cardText}>
            <span className={classes.cardSpan}>Capital: </span>{" "}
            {!(country.capital === undefined)
              ? country.capital[0]
              : "no capital"}
          </p>
        </div>
      </div>
    </li>
  );
}

export default Card;
