// import { app } from "../main";

import { displayCountry } from "./displayCountry";

export const countryName = async (keyword) => {
  try {
    const response = await fetch("https://restcountries.com/v3/all");
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch country data.");
    }

    const data = await response.json();
    // console.log(data[0].name.common);

    let found = false;
    data.forEach((country) => {
      if (country.name.common.toLowerCase() == keyword.toLowerCase()) {
        console.log(country.name.common);
        displayCountry(country);
        found = true;
      }
      // else{
      //   alert("ülke bulunamadı") sonsuz döngüye giriyor
      // }
    });

    if (!found) {
      alert("Ülke bulunamadı");
    }

    
  } catch (error) {
    console.error("Error fetching country data:", error);
  }
};
