import React, { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import { Routes, Route } from 'react-router-dom';
import HomePage from './homepage/homepage.component';
import CountryPage from './components/country-page/country-page.component';
import Header from './components/header/header.component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from './redux/features/countiresSlice';
import Spinner from './components/spinner/spinner.component';
import './App.css';

const App = () => {
  const defaultLight = window.matchMedia(
    '(prefers-color-scheme: light)'
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultLight ? 'dark' : 'light'
  );
  const switchThemeFunction = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  const loading = useSelector((state) => state.countries.loading);
  const error = useSelector((state) => state.countries.error);

  return (
    <div className="app" data-theme={theme}>
      <Header switchTheme={switchThemeFunction} theme={theme} />
      <div
        className="container"
        style={{ top: '50%', textAlign: 'center', color: 'var(--text)' }}
      >
        {error ? <h2>{error}</h2> : ''}
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={loading ? <Spinner /> : <HomePage countries={countries} />}
        ></Route>
        <Route
          path="country/:nameId"
          element={<CountryPage countries={countries} />}
        ></Route>
      </Routes>
      <p
        style={{
          textAlign: 'center',
          marginTop: '2rem',
          color: 'var(--text)',
        }}
      >
        &copy; Copyright 2022
        <strong>
          &nbsp;
          <a href="https://github.com/filobater" target="blank">
            Filobater Nader
          </a>
        </strong>
      </p>
    </div>
  );
};

export default App;
