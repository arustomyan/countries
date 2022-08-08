import { useContext } from "react";
import MyInput from "../UI/Input/MyInput";
import MySelect from "../UI/Select/MySelect";
import classes from "./Filter.module.css";
import DarkModeContext from "../../context/context";

function Filter({ filter, setFilter }) {
  const darkMode = useContext(DarkModeContext);

  const style = darkMode
    ? { backgroundColor: "#fff" }
    : { backgroundColor: "#2B3844" };

  const handleChange = (e) => {
    setFilter({ ...filter, query: e.target.value });
  };

  const handleSelect = (e) => {
    setFilter({ ...filter, select: e.target.value });
  };

  return (
    <div className={classes.filterContainer}>
      <MyInput
        type="text"
        placeholder="Search for a country…"
        value={filter.query}
        onChange={handleChange}
      />
      <MySelect
        style={style}
        value={filter.select}
        onChange={handleSelect}
        defaultValue="Select region"
      >
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="">All</option>
      </MySelect>
    </div>
  );
}

export default Filter;
