import { useMemo } from "react";

export const useSelect = (countries, select) =>
  useMemo(() => {
    if (!select) return countries;

    return countries.filter((country) => country.region === select);
  }, [countries, select]);

export const useCountry = (countries, select, query) => {
  const filteredCountries = useSelect(countries, select);

  return useMemo(
    () =>
      filteredCountries.filter((country) =>
        country.name.common.toLowerCase().includes(query)
      ),
    [filteredCountries, query]
  );
};
