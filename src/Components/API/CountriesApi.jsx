import axios from "axios";

export default class CountriesApi {
  static async getAll() {
    const response = await axios.get(
      "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,region,population,cca3"
    );
    return response.data;
  }

  static async getCard(country) {
    const response = await axios.get(
      `https://restcountries.com/v3.1/alpha/${country}?fields=name,capital,currencies,tld,subregion,region,population,flags,borders,languages`
    );
    return response.data;
  }
}
