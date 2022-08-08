import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./CardWhite.module.css";
import DarkModeContext from "../../context/context";

function Card({ country }) {
  const darMode = useContext(DarkModeContext);
  const classes1 = darMode
    ? { backgroundColor: "#fff" }
    : { backgroundColor: "#2B3844" };

  return (
    <li className={classes.card} style={classes1}>
      <Link to={`/${country.cca3}`}>
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
              <span className={classes.cardSpan}>Region: </span>{" "}
              {country.region}
            </p>
            <p className={classes.cardText}>
              <span className={classes.cardSpan}>Capital: </span>{" "}
              {!(country.capital === undefined)
                ? country.capital[0]
                : "no capital"}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Card;
