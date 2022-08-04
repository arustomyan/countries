// eslint-disable-next-line import/no-cycle
import Card from "./Card/Card";

const style = {
  display: "flex",
  width: "1278px",
  paddingTop: "20px",
  margin: "auto",
  justifyContent: "space-between",
  flexWrap: "wrap",
  rowGap: "50px",
  alignItems: "stretch",
  marginBottom: "50px",
  color: "inherit",
};

function CardList({ countries }) {
  return (
    <div style={style}>
      {countries.map((country) => (
        <Card country={country} key={country.cca3} />
      ))}
    </div>
  );
}

export default CardList;
