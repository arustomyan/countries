import {useMemo} from "react";

export const useSelect = (countries, select) => {
    console.log("отработало юсеселест" + select)

    const filteredCountries = useMemo(() => {
        console.log("отработало юсемемо" + select)

        if(!select) return countries;
        return countries.filter(country => {
            console.log('48545454')
            return country.region == select
        })
    }, [countries, select])
    
    return filteredCountries;
    
} 



export const useCountry = (countries, select, query) => {
    console.log("отработало юсеконтри")
    const filteredCountries = useSelect(countries, select)
    console.log('после цифр')

    const searchedCountries = useMemo(() => {
        return filteredCountries.filter(country => country.name.common.toLowerCase().includes(query))
    }, [query, countries, select])

    return searchedCountries;
    
} 