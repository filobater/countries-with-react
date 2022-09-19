import { React } from 'react';
import Card from '../card/card.component';
import { CardListStyles } from './card-list';

const CardList = ({ countries }) => {
  return (
    <CardListStyles>
      {[...countries]
        .sort((a, b) => a.name.common.localeCompare(b.name.common))
        .map((country) => (
          <Card
            key={country.name.common}
            name={country.name.common}
            img={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital ? country.capital : 'Not Found'}
            nameId={country.name.common}
          ></Card>
        ))}
    </CardListStyles>
  );
};

export default CardList;
