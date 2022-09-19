import React from 'react';
import Country from '../country/country.component';
import { useParams } from 'react-router-dom';
import Button from '../button/button.component';
import Spinner from '../spinner/spinner.component';

const CountryPage = ({ countries }) => {
  const { nameId } = useParams();
  if (countries.length > 0) {
    const country = countries.find(
      (country) => country.name.common === nameId.slice(1)
    );

    const back = () => {
      window.history.back();
    };

    return (
      <div className="country-page">
        <div className="container">
          <Button back={back}>Back</Button>
          <Country
            title={country.name.common}
            img={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital ? country.capital : 'Not Found'}
            subRegion={country.subregion ? country.subregion : 'Not Found'}
            topLevelDomain={
              country.tld ? [...country.tld.join(' - ')] : 'Not Found'
            }
            languages={
              country.languages
                ? [...Object.values(country.languages).join(', ')]
                : 'Not Found'
            }
            currencies={
              country.currencies
                ? Object.values(country.currencies)[0].name
                : 'Not Found'
            }
            border={
              country.borders ? [...country.borders.join(', ')] : 'Not Found'
            }
          ></Country>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};
export default CountryPage;
