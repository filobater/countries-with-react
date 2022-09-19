import React from 'react';

import CardList from '../components/card-list/card-list.component';
import { SearchBox } from '../components/search/search.component';
import Options from '../components/options/options.component';

import { useSelector, useDispatch } from 'react-redux';
import { search, regionFilter } from '../redux/features/countiresSlice';

import './homepage.styles.jsx';
import { HomeStyles } from './homepage.styles.jsx';

const HomePage = ({ countries }) => {
  const searchValue = useSelector((state) => state.countries.search.trim());
  const regionValue = useSelector((state) => state.countries.region);
  const filteredCountries = useSelector(
    (state) => state.countries.filteredCountries
  );
  const filteredRegion = useSelector((state) => state.countries.filteredRegion);

  const filteredCountriesAndRegion = filteredRegion.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  const dispatch = useDispatch();

  const optionValues = ['Africa', 'Asia', 'Europe', 'Americas', 'Oceania'];

  let List;
  if (searchValue) {
    List = <CardList countries={filteredCountries}></CardList>;
  }
  if (regionValue) {
    List = <CardList countries={filteredRegion}></CardList>;
  }
  if (regionValue && searchValue) {
    List = <CardList countries={filteredCountriesAndRegion}></CardList>;
  }

  return (
    <HomeStyles>
      <div className="container">
        <div className="home-header">
          <SearchBox
            placeholder={'Search for a country...'}
            value={searchValue}
            handleChange={(e) => dispatch(search(e.target.value))}
          />
          <select
            className="region"
            onChange={(e) => dispatch(regionFilter(e.target.value))}
          >
            <option label="Filter by Region"></option>
            {optionValues.map((option, i) => (
              <Options value={option} key={i} />
            ))}
          </select>
        </div>
        {List ? List : <CardList countries={countries}></CardList>}
      </div>
    </HomeStyles>
  );
};

export default HomePage;
