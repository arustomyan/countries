import React from 'react';

const MySelect = ({option, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={event => {
                onChange(event.target.value)
            }}
        >
            <option disabled={true} value="">{defaultValue}</option>
            {option.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;






// import React from 'react'

// export default function 
// () {
//   return (
//     <select>
//         <option value="ytjyj"   key="1">{defaultValue}</option>
//         <option value="Africa"  key="2">Africa</option>
//         <option value="America" key="3">America</option>
//         <option value="Asia"    key="4">Asia</option>
//         <option value="Europe"  key="5">Europe</option>
//         <option value="Oceania" key="6">Oceania</option>
//     </select>
//   )
// }
