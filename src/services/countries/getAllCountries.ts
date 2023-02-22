import axios from "axios";

export const getAllCountries = () => {
  return axios.get("https://restcountries.com/v2/all");
};
