import React from "react";
import "./Country.css";
const Country = (props) => {
  // destructure
  const { name, region, flags, population } = props.country;
console.log('unique', props.country);

  return (
    <div className="country">
      <p>{props.country.numericCode}</p>
      <img src={flags.png} alt="" />
      <h2>Name: {name}</h2>
      <h3>Population: {population}</h3>
      <h3>Region: {region}</h3>
    </div>
  );
};

export default Country;
