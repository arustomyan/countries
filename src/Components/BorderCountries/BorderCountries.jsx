import React from 'react'

function BorderCountries({border, changeCountry}) {

    console.log(border)
  return (
    <div>
        {border.map(item => 
            <button onClick={() => {changeCountry(item)}}>{item}</button>
        )}
    </div>
  )
}

export default BorderCountries