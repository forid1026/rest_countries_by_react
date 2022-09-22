import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';


const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  let i =0;
  return (
    <div className="container">
      <h2 style={{textAlign: "center", marginBottom: "15px", marginTop: "15px" }}>Total Number Of Countries: {countries.length}</h2>
      <div className="countries-wrapper">
      {
          countries.map(country=> <Country country={country} key={i++}></Country> )
      }
    </div>
    </div>
  );
};

export default Countries;
