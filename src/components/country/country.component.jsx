import React from 'react';
import { CountryDetails } from './country.styles';
const Country = ({
  img,
  title,
  population,
  region,
  subRegion,
  topLevelDomain,
  currencies,
  languages,
  capital,
  border,
}) => (
  <CountryDetails>
    <img src={img} alt="country flag" />
    <div className="country-information">
      <h2 className="title">{title}</h2>
      <p>
        <span>Native Name</span> : {title}
      </p>
      <p>
        <span>Population</span> : {population}
      </p>
      <p>
        <span>Region</span> : {region}
      </p>
      <p>
        <span>Sub Region</span> : {subRegion}
      </p>
      <p>
        <span>Top Level Domain</span> : {topLevelDomain}
      </p>
      <p>
        <span>Currencies</span> : {currencies}
      </p>
      <p>
        <span>Languages</span> : {languages}
      </p>
      <p>
        <span>Capital</span> : {capital}
      </p>
      <p>
        <span>Border Countries</span> : {border}
      </p>
    </div>
  </CountryDetails>
);

export default Country;
