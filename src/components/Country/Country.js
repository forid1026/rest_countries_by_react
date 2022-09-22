import React from "react";
import "./Country.css";
const Country = (props) => {
  // destructure
  const { name, region, flags, population } = props.country;
console.log('unique', props.country);

  return (
          <div className="col-md-4 mb-5">
            <div class="card p-2">
            <img src={flags.png} class="card-img-top" style={{height:'180px'}} alt="" />
              <div class="card-body">
                <h5 class="card-title">Name: {name}</h5>
                <p class="card-text">Population: {population}</p>
                <p class="card-text">Region: {region}</p>
              </div>
          </div>
          </div>
       
      );
};

export default Country;
