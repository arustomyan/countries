import React, { useContext } from "react";

import MyInput from "../UI/Input/MyInput";
import MySelect from "../UI/Select/MySelect";
import classes from "./Filter.module.css";
import { DarkModeContext } from "../../App";

const Filter = ({ filter, setFilter }) => {
  const darkMode = useContext(DarkModeContext);

  const style = darkMode
    ? { backgroundColor: "#fff" }
    : { backgroundColor: "#2B3844" };

  return (
    <div className={classes.filterContainer}>
      <MyInput
        type={"text"}
        placeholder={"Search for a country…"}
        value={filter.query}
        onChange={(e) => {
          setFilter({ ...filter, query: e.target.value });
        }}
      />
      <MySelect
        style={style}
        value={filter.select}
        onChange={(selected) => setFilter({ ...filter, select: selected })}
        defaultValue="Select region"
        option={[
          { value: "Africa", name: "Africa" },
          { value: "Europe", name: "Europe" },
          { value: "Americas", name: "Americas" },
          { value: "Asia", name: "Asia" },
          { value: "Oceania", name: "Oceania" },
          { value: "", name: "All" },
        ]}
      />
    </div>
  );
};

export default Filter;
