import whiteTheme from "./SelectWhiteMode.module.css";

function MySelect({ defaultValue, value, onChange, style, children }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={whiteTheme.selectRegion}
      style={style}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {children}
    </select>
  );
}

export default MySelect;
