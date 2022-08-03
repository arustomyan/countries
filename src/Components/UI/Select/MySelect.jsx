import whiteTheme from "./SelectWhiteMode.module.css";

function MySelect({ option, defaultValue, value, onChange, style }) {
  return (
    <select
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      className={whiteTheme.selectRegion}
      style={style}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {option.map((item) => (
        <option
          key={item.value}
          value={item.value}
          className={whiteTheme.option}
        >
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default MySelect;
