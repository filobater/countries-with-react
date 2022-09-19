import React from 'react';
import { NavLink } from 'react-router-dom';

import './card.styles.jsx';
import { CardStyles } from './card.styles.jsx';

const Card = ({ img, name, population, region, capital, nameId }) => {
  return (
    <NavLink to={`country/:${nameId}`}>
      <CardStyles>
        <img src={`${img}`} alt={`${name}`} />
        <div className="card-information">
          <h2>{name}</h2>
          <p>
            <span>Population:</span> {population}
          </p>
          <p>
            <span>Region:</span> {region}
          </p>
          <p>
            <span>Capital:</span> {capital}
          </p>
        </div>
      </CardStyles>
    </NavLink>
  );
};

export default Card;
