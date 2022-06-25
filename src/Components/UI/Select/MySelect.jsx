import React from "react";
import whiteTheme from "./SelectWhiteMode.module.css";

const MySelect = ({ option, defaultValue, value, onChange, style }) => {
  return (
    <select
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      className={whiteTheme.selectRegion}
      style={style}
    >
      <option disabled={true} value="">
        {defaultValue}
      </option>
      {option.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className={whiteTheme.option}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
