import { useMemo } from "react";

export const useSelect = (countries, select) => {
  const filteredCountries = useMemo(() => {
    if (!select) return countries;

    return countries.filter((country) => {
      return country.region == select;
    });
  }, [countries, select]);

  return filteredCountries;
};

export const useCountry = (countries, select, query) => {
  const filteredCountries = useSelect(countries, select);

  const searchedCountries = useMemo(() => {
    return filteredCountries.filter((country) =>
      country.name.common.toLowerCase().includes(query)
    );
  }, [query, countries, select]);

  return searchedCountries;
};
